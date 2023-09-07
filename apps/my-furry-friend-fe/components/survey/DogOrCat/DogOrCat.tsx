'use client';

import {
  CardRadioButton,
  RadioButtonGroup,
} from '@my-furry-family/next-ui-component';
import { useAtom } from 'jotai';
import { dogOrCatData } from '../../../store/survey';
import styles from './DogOrCat.module.scss';
import { SurveyTitle } from '../SurveyTitle/SurveyTitle';

export function DogOrCat() {
  const [value, setValue] = useAtom(dogOrCatData);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <SurveyTitle description="고양이는 추후 업데이트 하겠습니다.">
        우리 내새꾸는 <br />
        강아지인가요? 고양이인가요?
      </SurveyTitle>
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
