'use client';

import React, { useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  CloseButton,
  Skeleton,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useAtom } from 'jotai/index';
import useSWR from 'swr';
import { atomWithStorage } from 'jotai/utils';
import MapIcon from '@my-furry-family/images/map.svg';
import ListIcon from '@my-furry-family/images/list.svg';
import styles from './page.module.scss';
import SearchModal from '../../components/search/SearchModal';
import {
  search,
  searchKeyword,
  searchRecentFocusState,
  selectedFilters,
} from '../../store/search';
import SearchFilterButton from '../../components/search/SearchFilterButton';
import { searchHospital } from '../../service/search';
import useLocation from '../../hooks/useLocation';
import SearchList from '../../components/search/SearchList';
import Map from '../../components/map/Map';

const filters = [
  {
    key: 'regions',
    value: '지역',
  },
  {
    key: 'categories',
    value: '진료',
  },
  {
    key: 'values',
    value: '규모',
  },
];

const searchRecentStorage = atomWithStorage<string[]>('search-recent', []);

function Page() {
  const [searchRecent, setSearchRecent] = useAtom(searchRecentStorage);
  const [searchRecentFocus, setSearchRecentFocus] = useAtom(
    searchRecentFocusState,
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [displayMap, setDisplayMap] = React.useState(false);
  const [boundsLocation, setBoundsLocation] = React.useState<
    { lat: number; lng: number }[] | undefined
  >(undefined);
  const [searchFilter] = useAtom(search);
  const [selectedFilter, setSelectedFilter] = useAtom(selectedFilters);
  const [keyword, setKeyword] = useAtom(searchKeyword);
  const { location, searchLocation } = useLocation();
  const isSearchFilterValue = Object.values(searchFilter).some(
    (item) => item.length > 0,
  );

  const { data, isLoading } = useSWR(
    ['/animal-hospitals/search', keyword, searchFilter],
    (key) =>
      searchHospital({
        ...(keyword ? { name: keyword } : {}),
        ...(isSearchFilterValue
          ? {
              [selectedFilter.key]: searchFilter[selectedFilter.key].map(
                (item) => item.key,
              ),
            }
          : {}),
      }),
    {
      onSuccess: () => {
        setSearchRecent((prev) => {
          if (keyword) {
            if (prev.includes(keyword)) {
              return prev;
            }
            return [keyword, ...prev];
          }
          return prev;
        });
      },
      errorRetryCount: 3,
    },
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    if (
      data?.data.data.cooperationAnimalHospitals.concat(
        data?.data.data.nonCooperationAnimalHospitals,
      ).length > 0
    ) {
      setBoundsLocation(
        data?.data.data.cooperationAnimalHospitals
          .concat(data?.data.data.nonCooperationAnimalHospitals)
          .map((item) => ({
            lat: item.latitude,
            lng: item.longitude,
          })),
      );
    }
  }, [data]);

  const handleFilterClick = (filter: { key: string; value: string }) => {
    setSelectedFilter(filter);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <ButtonGroup className={styles.filter_button_group}>
        <div className={styles.filter_button}>
          {filters.map((filter) => (
            <SearchFilterButton
              key={filter.key}
              filter={filter}
              onFilterClick={handleFilterClick}
              badgeCount={searchFilter[filter.key].length}
              filterValue={searchFilter[filter.key]}
            />
          ))}
        </div>
        <Button
          className={styles.filter_button_icon}
          onClick={() => setDisplayMap(!displayMap)}
        >
          <Image
            src={displayMap ? ListIcon : MapIcon}
            width={20}
            height={20}
            alt="icon"
          />
        </Button>
      </ButtonGroup>

      {isLoading && !displayMap && (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <Stack key={index} spacing="20px" padding="16px">
              <Skeleton height="98px" />
            </Stack>
          ))}
        </>
      )}

      {searchRecentFocus ? (
        <div className={styles.search_recent}>
          <div className={styles.search_recent_title}>
            <h2>최근 검색어</h2>
            <CloseButton onClick={() => setSearchRecentFocus(false)} />
          </div>
          <div className={styles.search_recent_list}>
            {searchRecent?.map((item, index) => (
              <Tag
                key={`${item}-${index}`}
                role="button"
                className={styles.search_recent_item}
                onClick={() => {
                  setKeyword(item);
                }}
              >
                <TagLabel>{item}</TagLabel>
                <TagCloseButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchRecent((prev) => prev.filter((i) => i !== item));
                  }}
                />
              </Tag>
            ))}
          </div>
        </div>
      ) : displayMap ? (
        <Map
          hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
            data?.data.data.nonCooperationAnimalHospitals,
          )}
          location={location}
          boundsLocation={boundsLocation}
          searchLocation={searchLocation}
        />
      ) : (
        <SearchList
          hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
            data?.data.data.nonCooperationAnimalHospitals,
          )}
        />
      )}

      <SearchModal
        isOpen={isOpen}
        onClose={handleModalClose}
        selectedFilter={selectedFilter}
      />
    </div>
  );
}

export default Page;
