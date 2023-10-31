'use client';

import React from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Spinner } from '@chakra-ui/react';

export function KakaoMap({
  appKey,
  children,
}: {
  appKey: string;
  children?: React.ReactNode;
}) {
  const [loading, error] = useKakaoLoader({
    appkey: appKey,
  });

  return (
    <>
      {!loading && !error && (
        <Map
          center={{ lng: 127.1566638, lat: 35.8374724 }}
          style={{ width: '100%', height: '100%' }}
        >
          {children}
        </Map>
      )}
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      )}
      {error && (
        <div className="w-full h-full flex justify-center items-center bg-white">
          지도를 불러오는데 실패하였습니다.
        </div>
      )}
    </>
  );
}
