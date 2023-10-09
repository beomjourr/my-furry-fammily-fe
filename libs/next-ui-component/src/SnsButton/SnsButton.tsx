import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import kakao from '@my-furry-family/images/kakao_login_large_wide.png';
import styles from './SnsButton.module.scss';

export interface SnsButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'kakao';
}

export function SnsButton(props: SnsButtonProps) {
  const { type, ...rest } = props;

  return (
    <button className={styles.button} {...rest}>
      {type === 'kakao' && (
        <Image priority className={styles.image} src={kakao} alt="kakao" />
      )}
    </button>
  );
}

export default SnsButton;
