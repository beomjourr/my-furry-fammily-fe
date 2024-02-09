import React, { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { Skeleton, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Map from '../map/Map';
import SearchList from './SearchList';
import useLocation from '../../hooks/useLocation';
import {
  search,
  searchDisplayMapState,
  searchKeyword,
  searchRecentFocusState,
  searchRecentStorage,
  selectedFilters,
} from '../../store/search';
import { searchHospital } from '../../service/search';

export default function SearchContainer() {
  const { searchLocation } = useLocation();
  const setSearchRecent = useSetAtom(searchRecentStorage);
  const searchFilter = useAtomValue(search);
  const selectedFilter = useAtomValue(selectedFilters);
  const keyword = useAtomValue(searchKeyword);
  const isSearchFilterValue = Object.values(searchFilter).some(
    (item) => item.length > 0,
  );
  const displayMap = useAtomValue(searchDisplayMapState);
  const searchRecentFocus = useAtomValue(searchRecentFocusState);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['/animal-hospitals/search', keyword, searchFilter],
    queryFn: () =>
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
  });

  useEffect(() => {
    if (isSuccess && keyword) {
      setSearchRecent((prev) => {
        if (prev.includes(keyword)) {
          return prev;
        }
        return [keyword, ...prev].slice(0, 5);
      });
    }
  }, [isSuccess, keyword, setSearchRecent]);

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
              isBounds={!!keyword || isSearchFilterValue}
              hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
                data?.data.data.nonCooperationAnimalHospitals,
              )}
              boundsLocation={
                data?.data.data.cooperationAnimalHospitals
                  .concat(data?.data.data.nonCooperationAnimalHospitals)
                  .map((item) => ({
                    lat: item.latitude,
                    lng: item.longitude,
                  })) || []
              }
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
