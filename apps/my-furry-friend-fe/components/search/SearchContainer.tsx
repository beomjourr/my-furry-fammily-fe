'use client';

import React, { useEffect } from 'react';
import useSWR from 'swr';
import { useAtom } from 'jotai/index';
import { atomWithStorage } from 'jotai/utils';
import { Skeleton, Stack } from '@chakra-ui/react';
import Map from '../map/Map';
import SearchList from './SearchList';
import useLocation from '../../hooks/useLocation';
import {
  search,
  searchDisplayMapState,
  searchKeyword,
  searchRecentFocusState,
  selectedFilters,
} from '../../store/search';
import { searchHospital } from '../../service/search';

const searchRecentStorage = atomWithStorage<string[]>('search-recent', []);

export default function SearchContainer() {
  const { searchLocation } = useLocation();
  const [boundsLocation, setBoundsLocation] = React.useState<
    { lat: number; lng: number }[] | undefined
  >(undefined);
  const [, setSearchRecent] = useAtom(searchRecentStorage);
  const [searchFilter] = useAtom(search);
  const [selectedFilter] = useAtom(selectedFilters);
  const [keyword] = useAtom(searchKeyword);
  const isSearchFilterValue = Object.values(searchFilter).some(
    (item) => item.length > 0,
  );
  const [displayMap] = useAtom(searchDisplayMapState);
  const [searchRecentFocus] = useAtom(searchRecentFocusState);

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
    if (
      !data?.data.data.cooperationAnimalHospitals.concat(
        data?.data.data.nonCooperationAnimalHospitals,
      )
    ) {
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

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 10 }).map((_, index) => (
          <Stack key={index} spacing="20px" padding="16px">
            <Skeleton height="98px" />
          </Stack>
        ))}
      </>
    );
  }
  return (
    <>
      {!searchRecentFocus && (
        <>
          {displayMap ? (
            <Map
              hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
                data?.data.data.nonCooperationAnimalHospitals,
              )}
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
        </>
      )}
    </>
  );
}