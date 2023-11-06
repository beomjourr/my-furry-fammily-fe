import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import gps from '@my-furry-family/images/gps.svg';
import styles from './LocationButton.module.scss';

type LocationButtonProps = HTMLAttributes<HTMLButtonElement>;

function LocationButton({ onClick }: LocationButtonProps) {
  return (
    <header>
      <button type="button" className={styles.button} onClick={onClick}>
        <Image src={gps} alt="gps" />
        <p>내 위치를 설정해주세요</p>
      </button>
    </header>
  );
}

export default LocationButton;
