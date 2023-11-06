import React, { HTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import gps from '@my-furry-family/images/gps.svg';
import styles from './LocationButton.module.scss';

interface LocationButtonProps extends HTMLAttributes<HTMLButtonElement> {
  location: {
    latitude: number;
    longitude: number;
  };
}

function LocationButton({ onClick, location }: LocationButtonProps) {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const fetchAddress = async () => {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location.longitude}&y=${location.latitude}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_APP_REST_API_KEY}`,
          },
        },
      );
      setAddress(response.data.documents[0].address.region_3depth_name);
    };

    if (location) {
      fetchAddress();
    }
  }, [location]);

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <Image src={gps} alt="gps" />
      <p>{address || '내 위치를 설정해주세요'}</p>
    </button>
  );
}

export default LocationButton;
