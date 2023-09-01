import React from 'react';
import Image from 'next/image';
import kakao from '../../public/kakao_login_large_wide.png';
import styles from './sns-button.module.scss';

export interface SnsButtonProps {
  type: 'kakao';
}

export function SnsButton(props: SnsButtonProps) {
  const { type } = props;
  return (
    <button className={styles.button}>
      {type === 'kakao' && <Image src={kakao} alt="kakao"></Image>}
    </button>
  );
}

export default SnsButton;
