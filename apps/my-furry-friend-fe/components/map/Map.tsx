'use client';

import React, { useState } from 'react';
import { KakaoMap } from '@my-furry-family/next-ui-component';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import { Marker } from '../Marker/Marker';
import { HospitalResponse } from '../../service/search';
import MapInfo from './MapInfo';
import MapReSearch from './MapReSearch';
import MapActiveHospitalCard from './MapActiveHospitalCard';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

interface MapProps {
  hospitalData?: HospitalResponse[];
  setLocation?: (position: { lat: number; lng: number }) => void;
  searchLocation?: { latitude: number; longitude: number };
  boundsLocation?: { lat: number; lng: number }[];
  setIsRequest?: (isRequest: boolean) => void;
  isBounds?: boolean;
}

function Map({
  hospitalData,
  setLocation,
  boundsLocation,
  isBounds,
  searchLocation,
  setIsRequest,
}: MapProps) {
  const [selectHospital, setSelectHospital] = useState<
    HospitalResponse | undefined
  >(undefined);
  const [isDragEnd, setIsDragEnd] = useState(false);

  return (
    <div className="relative w-full overflow-hidden flex-1">
      <MapInfo />

      <div className="absolute w-full bottom-[16px] left-0 flex items-center justify-center">
        {isDragEnd && (
          <MapReSearch
            selectHospital={selectHospital}
            setIsRequest={setIsRequest}
          />
        )}
        {selectHospital && (
          <MapActiveHospitalCard selectHospital={selectHospital} />
        )}
      </div>

      <KakaoMap
        appKey={APP_KEY}
        onClick={() => setSelectHospital(undefined)}
        center={{
          lng: searchLocation?.longitude || 127.028307900881,
          lat: searchLocation?.latitude || 37.4981646510326,
        }}
        setPosition={setLocation}
        boundsLocation={boundsLocation}
        setIsRequest={setIsRequest}
        setIsDragEnd={setIsDragEnd}
        isBounds={isBounds}
        level={4}
      >
        <MarkerClusterer
          averageCenter
          minLevel={7}
          styles={[
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: '#fff',
              border: '1px solid #3467D4',
              borderRadius: '50%',
              color: '#3467D4',
              fontWeight: 'bold',
            },
          ]}
        >
          {hospitalData?.map((item) => (
            <Marker
              key={item.id}
              isCooperation={item.is_cooperation}
              isActive={selectHospital?.id === item.id}
              position={{
                lng: item.longitude,
                lat: item.latitude,
              }}
              onClick={() => setSelectHospital(item)}
            />
          ))}
        </MarkerClusterer>
        {searchLocation && (
          <Marker
            position={{
              lng: searchLocation.longitude,
              lat: searchLocation.latitude,
            }}
          />
        )}
      </KakaoMap>
    </div>
  );
}

export default Map;
