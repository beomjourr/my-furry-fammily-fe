import React from 'react';
import styles from './sns-button.module.scss';
import kakao from '@/public/kakao_login_large_wide.png';
import Button from '@/atom/Button/Button';

export interface SnsButtonProps {
  type: 'kakao';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function SnsButton(props: SnsButtonProps) {
  const { type, onClick } = props;
  return (
    <Button className={styles.button} onClick={onClick}>
      {type === 'kakao' && <img src={kakao} alt="kakao"></img>}
    </Button>
  );
}

export default SnsButton;
