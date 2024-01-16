'use client';

import useSWR from 'swr';
import { useAtom } from 'jotai/index';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Map from '../../../components/map/Map';
import { searchHospital } from '../../../service/search';
import { searchKeyword } from '../../../store/search';
import useLocation from '../../../hooks/useLocation';

export default function Index() {
  const [keyword] = useAtom(searchKeyword);
  const [location, setLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const { location: userLocation, searchLocation } = useLocation();
  const searchParams = useSearchParams();
  const scale = searchParams.get('scale');
  const category = searchParams.get('category');
  const region = searchParams.get('region');

  useEffect(() => {
    if (userLocation && !searchLocation) {
      setLocation({
        lat: userLocation.latitude,
        lng: userLocation.longitude,
      });
    }

    if (searchLocation && !userLocation) {
      setLocation({
        lat: searchLocation.latitude,
        lng: searchLocation.longitude,
      });
    }

    if (!userLocation && !searchLocation) {
      setLocation(undefined);
    }
  }, [searchLocation, userLocation]);

  const { data } = useSWR(
    ['/animal-hospitals/search', keyword, location, scale, category, region],
    (key) =>
      searchHospital({
        ...(scale ? { values: [scale] } : {}),
        ...(category ? { categories: [category] } : {}),
        ...(region ? { regions: [region] } : {}),
        ...(keyword ? { name: keyword } : {}),
        ...(location
          ? { latitude: location.lat, longitude: location.lng }
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
      location={userLocation}
      searchLocation={searchLocation}
    />
  );
}
