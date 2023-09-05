'use client';

import {
  CardRadioButton,
  RadioButtonGroup,
} from '@my-furry-family/next-ui-component';
import { useState } from 'react';
import styles from './DogOrCat.module.scss';

export function DogOrCat() {
  const [value, setValue] = useState('강아지');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        우리 내새꾸는 <br />
        강아지인가요? 고양이인가요?
      </p>
      <p className={styles.description}>고양이는 추후 업데이트 하겠습니다.</p>
      <RadioButtonGroup
        className={styles['radio-buttons']}
        value={value}
        onClick={handleClick}
      >
        <CardRadioButton value="강아지">강아지</CardRadioButton>
        <CardRadioButton value="고양이" disabled>
          고양이
        </CardRadioButton>
      </RadioButtonGroup>
    </div>
  );
}
