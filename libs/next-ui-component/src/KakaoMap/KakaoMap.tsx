'use client';

import React from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Spinner } from '@chakra-ui/react';
import { MapProps } from 'react-kakao-maps-sdk/dist/components/Map';

interface MarkerProps extends MapProps {
  appKey: string;
  children?: React.ReactNode;
  onClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void;
  setPosition?: (position: { lat: number; lng: number }) => void;
  boundsLocation?: { lat: number; lng: number }[] | undefined;
}

export function KakaoMap({
  appKey,
  children,
  onClick,
  center,
  setPosition,
  boundsLocation,
  ...rest
}: MarkerProps) {
  const [loading] = useKakaoLoader({
    appkey: appKey,
  });

  const handleSetPosition = (map: kakao.maps.Map) => {
    if (!setPosition) {
      return;
    }

    setPosition?.({
      lat: map.getCenter().getLat(),
      lng: map.getCenter().getLng(),
    });
  };

  const handleBoundsLocation = (map: kakao.maps.Map) => {
    if (!boundsLocation) {
      return;
    }

    const bounds = new window.kakao.maps.LatLngBounds();

    boundsLocation?.forEach((point) => {
      bounds.extend(new window.kakao.maps.LatLng(point.lat, point.lng));
    });

    map.setBounds(bounds);
  };

  return (
    <>
      {!loading && (
        <Map
          center={center}
          style={{ width: '100%', height: '100%' }}
          onClick={onClick}
          onDragEnd={handleSetPosition}
          onTileLoaded={handleBoundsLocation}
          {...rest}
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
