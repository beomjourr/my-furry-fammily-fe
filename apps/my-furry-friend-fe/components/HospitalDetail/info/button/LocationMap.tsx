'use client';

import { KakaoMap } from '@my-furry-family/next-ui-component';
import { Marker } from '../../../Marker/Marker';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

interface LocationMapProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

export default function LocationMap({ location }: LocationMapProps) {
  return (
    <KakaoMap
      appKey={APP_KEY}
      center={{
        lng: location?.longitude,
        lat: location?.latitude,
      }}
    >
      <Marker
        isActive
        isCooperation={false}
        position={{
          lng: location?.longitude,
          lat: location?.latitude,
        }}
      />
    </KakaoMap>
  );
}
