'use client';

import useSWR from 'swr';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import Map from '../../../components/map/Map';
import { searchHospital } from '../../../service/search';
import useLocation from '../../../hooks/useLocation';
import styles from './page.module.scss';
import SearchHeaderInput from '../../../components/search/SearchHeaderInput';
import { Header } from '../../../components/Header/Header';

export default function Index() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const [boundsLocation, setBoundsLocation] = useState<
    { lat: number; lng: number }[] | undefined
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

  const { data } = useSWR(
    isRequest && location
      ? ['/animal-hospitals/search', keyword, scale, category, region, location]
      : ['/animal-hospitals/search', keyword, scale, category, region],
    () =>
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
    {
      errorRetryCount: 3,
    },
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    setBoundsLocation(
      data?.data.data.cooperationAnimalHospitals
        .concat(data?.data.data.nonCooperationAnimalHospitals)
        .map((item) => ({
          lat: item.latitude,
          lng: item.longitude,
        })),
    );
  }, [data]);

  return (
    <>
      <Header isBack className={styles.header}>
        <SearchHeaderInput keyword={keyword} setKeyword={setKeyword} />
      </Header>
      <Map
        hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
          data?.data.data.nonCooperationAnimalHospitals,
        )}
        setLocation={setLocation}
        searchLocation={searchLocation}
        boundsLocation={boundsLocation}
        setIsRequest={setIsRequest}
      />
    </>
  );
}
