'use client';

import React from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Spinner } from '@chakra-ui/react';

export function KakaoMap({
  appKey,
  children,
  onClick,
}: {
  appKey: string;
  children?: React.ReactNode;
  onClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void;
}) {
  const [loading] = useKakaoLoader({
    appkey: appKey,
  });

  return (
    <>
      {!loading && (
        <Map
          center={{ lng: 127.1566638, lat: 35.8374724 }}
          style={{ width: '100%', height: '100%' }}
          onClick={onClick}
        >
          {children}
        </Map>
      )}
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      )}
    </>
  );
}
