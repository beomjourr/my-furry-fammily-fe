import React, { HTMLAttributes, useEffect } from 'react';
import Image from 'next/image';
import gps from '@my-furry-family/images/gps.svg';
import { useAtom } from 'jotai';
import { sendGAEvent } from '../../../utils/ga';
import styles from './LocationButton.module.scss';
import { addressState } from '../../../store/address';
import { searchLocationState } from '../../../store/location';
import { fetchAddress } from '../../../service/address';

type LocationButtonProps = HTMLAttributes<HTMLButtonElement>;

function LocationButton({ onClick }: LocationButtonProps) {
  const [address, setAddress] = useAtom(addressState);
  const [searchLocation] = useAtom(searchLocationState);

  useEffect(() => {
    (async () => {
      const fetchData = (latitude: number, longitude: number) => {
        return fetchAddress({ latitude, longitude });
      };

      if (searchLocation) {
        const { data } = await fetchData(
          searchLocation.latitude,
          searchLocation.longitude,
        );
        const [region] = data.documents;
        setAddress(region?.address?.region_3depth_name);
        sendGAEvent('select_location', {
          location: `${region?.address?.region_1depth_name || ''} ${
            region?.address?.region_2depth_name || ''
          }`,
        });
      }
      //
      // if (location && !searchLocation) {
      //   const { data } = await fetchData(location.latitude, location.longitude);
      //   const [region] = data.documents;
      //   setAddress(region?.address?.region_3depth_name);
      // }
      //
      // if (!location && !searchLocation) {
      //   setAddress('내 위치를 설정해주세요');
      // }
    })();
  }, [searchLocation, setAddress]);

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <Image src={gps} alt="gps" />
      <p>{address}</p>
    </button>
  );
}

export default LocationButton;
