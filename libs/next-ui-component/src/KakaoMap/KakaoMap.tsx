import React, { useCallback } from 'react';
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
  isBounds?: boolean;
  setIsRequest?: (isRequest: boolean) => void;
  setIsDragEnd?: (isDragEnd: boolean) => void;
}

export function KakaoMap({
  appKey,
  children,
  onClick,
  center,
  setPosition,
  boundsLocation,
  isBounds,
  setIsRequest,
  setIsDragEnd,
  ...rest
}: MarkerProps) {
  const [loading] = useKakaoLoader({
    appkey: appKey,
    libraries: ['services', 'clusterer'],
  });

  const handleSetPosition = useCallback(
    (map: kakao.maps.Map) => {
      if (!setPosition) {
        return;
      }

      setIsRequest?.(false);
      setIsDragEnd?.(true);
      setPosition?.({
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      });
    },
    [setIsDragEnd, setIsRequest, setPosition],
  );

  const handleBoundsLocation = useCallback(
    (map: kakao.maps.Map) => {
      if (!isBounds || !boundsLocation || boundsLocation.length === 0) {
        return;
      }
      const bounds = new window.kakao.maps.LatLngBounds();

      boundsLocation?.forEach((point) => {
        bounds.extend(new window.kakao.maps.LatLng(point.lat, point.lng));
      });

      const boundsTimeout = setTimeout(() => {
        map.setBounds(bounds);
      });

      return () => clearTimeout(boundsTimeout);
    },
    [boundsLocation, isBounds],
  );

  return (
    <>
      {!loading && (
        <Map
          center={center}
          style={{ width: '100%', height: '100%' }}
          onClick={onClick}
          onDragStart={() => setIsRequest?.(false)}
          onDragEnd={handleSetPosition}
          onCreate={handleBoundsLocation}
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
