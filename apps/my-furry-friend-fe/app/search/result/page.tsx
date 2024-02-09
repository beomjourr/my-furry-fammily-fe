'use client';

import { useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Map from '../../../components/map/Map';
import { searchHospital } from '../../../service/search';
import { searchKeyword } from '../../../store/search';
import useLocation from '../../../hooks/useLocation';

export default function Index() {
  const keyword = useAtomValue(searchKeyword);
  const [location, setLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const [isRequest, setIsRequest] = useState(false);
  const { searchLocation } = useLocation();
  const searchParams = useSearchParams();
  const scale = searchParams.get('scale');
  const category = searchParams.get('category');
  const region = searchParams.get('region');
  const toast = useToast();

  useEffect(() => {
    toast({
      title: '반경 5km 내로 표시됩니다.',
      duration: 3000,
      variant: 'toast',
    });
  }, []);

  useEffect(() => {
    if (searchLocation) {
      setLocation({
        lat: searchLocation.latitude,
        lng: searchLocation.longitude,
      });
    }

    if (!searchLocation) {
      setLocation(undefined);
    }
  }, [searchLocation]);

  const { data } = useQuery({
    queryKey:
      isRequest && location
        ? [
            '/animal-hospitals/search',
            keyword,
            scale,
            category,
            region,
            location,
          ]
        : ['/animal-hospitals/search', keyword, scale, category, region],
    queryFn: () =>
      searchHospital({
        ...(scale ? { scales: [scale] } : {}),
        ...(category ? { categories: [category] } : {}),
        ...(region ? { regions: [region] } : {}),
        ...(keyword ? { name: keyword } : {}),
        ...(location
          ? { latitude: location.lat, longitude: location.lng }
          : {}),
        distance: 5,
      }),
  });

  return (
    <Map
      isBounds={!!keyword}
      hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
        data?.data.data.nonCooperationAnimalHospitals,
      )}
      setLocation={setLocation}
      searchLocation={searchLocation}
      boundsLocation={
        data?.data.data.cooperationAnimalHospitals
          .concat(data?.data.data.nonCooperationAnimalHospitals)
          .map((hospital) => ({
            lat: hospital.latitude,
            lng: hospital.longitude,
          })) || []
      }
      setIsRequest={setIsRequest}
    />
  );
}
