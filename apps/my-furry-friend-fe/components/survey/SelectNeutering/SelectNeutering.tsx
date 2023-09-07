'use client';

import {
  CardRadioButton,
  RadioButtonGroup,
} from '@my-furry-family/next-ui-component';
import { useAtom } from 'jotai';
import { isNeutering } from '../../../store/survey';
import styles from './SelectNeutering.module.scss';
import { SurveyTitle } from '../SurveyTitle/SurveyTitle';

export function SelectNeutering() {
  const [value, setValue] = useAtom(isNeutering);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value === 'true');
  };

  return (
    <div className={styles.container}>
      <SurveyTitle>우리 내새꾸는 중성화 수술을 받았나요?</SurveyTitle>
      <div className={styles['radio-container']}>
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={value.toString()}
          onClick={handleClick}
        >
          <CardRadioButton value="true">네 받았어요.</CardRadioButton>
          <CardRadioButton value="false">받지 않았어요.</CardRadioButton>
        </RadioButtonGroup>
      </div>
    </div>
  );
}
