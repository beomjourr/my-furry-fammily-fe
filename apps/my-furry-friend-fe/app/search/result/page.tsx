'use client';

import useSWR from 'swr';
import { useAtom } from 'jotai/index';
import { useState } from 'react';
import Map from '../../../components/map/Map';
import { searchHospital } from '../../../service/search';
import { searchKeyword } from '../../../store/search';
import useLocation from '../../../hooks/useLocation';

export default function Index() {
  const [keyword] = useAtom(searchKeyword);
  const [location, setLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const { currentLocation } = useLocation();

  const { data } = useSWR(
    ['/animal-hospitals/search', keyword, location],
    (key) =>
      searchHospital({
        ...(keyword ? { name: keyword } : {}),
        ...(location
          ? {
              latitude: location.lat,
              longitude: location.lng,
            }
          : {}),
        distance: 5,
      }),
    {
      errorRetryCount: 3,
    },
  );

  return (
    <Map
      hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
        data?.data.data.nonCooperationAnimalHospitals,
      )}
      setLocation={setLocation}
      currentLocation={currentLocation}
    />
  );
}
