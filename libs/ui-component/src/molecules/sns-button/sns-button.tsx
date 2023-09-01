import Button from '../../atom/Button/Button';
import styles from './sns-button.module.scss';
import kakao from '../../../public/kakao_login_large_wide.png';
import React from 'react';

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
