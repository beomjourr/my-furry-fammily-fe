'use client';

import {
  CardRadioButton,
  RadioButtonGroup,
} from '@my-furry-family/next-ui-component';
import { useAtom } from 'jotai';
import { species } from '../../../store/survey';
import styles from './SelectSpecies.module.scss';
import { SurveyTitle } from '../SurveyTitle/SurveyTitle';

export function SelectSpecies() {
  const [value, setValue] = useAtom(species);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <SurveyTitle description="다른 종은 추후 업데이트 됩니다.">
        우리 내새꾸의 종을 알려주세요.
      </SurveyTitle>
      <div className={styles['radio-container']}>
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={value}
          onClick={handleClick}
        >
          <CardRadioButton value="포메라니안">포메라니안</CardRadioButton>
          <CardRadioButton value="비숑프리제">비숑프리제</CardRadioButton>
          <CardRadioButton value="말티즈">말티즈</CardRadioButton>
          <CardRadioButton value="웰시코기">웰시코기</CardRadioButton>
          <CardRadioButton value="푸들">푸들</CardRadioButton>
          <CardRadioButton value="보더콜리">보더콜리</CardRadioButton>
          <CardRadioButton value="닥스훈트">닥스훈트</CardRadioButton>
          <CardRadioButton value="치와와">치와와</CardRadioButton>
          <CardRadioButton value="프렌치불독">프렌치불독</CardRadioButton>
          <CardRadioButton value="시츄">시츄</CardRadioButton>
        </RadioButtonGroup>
      </div>
    </div>
  );
}
