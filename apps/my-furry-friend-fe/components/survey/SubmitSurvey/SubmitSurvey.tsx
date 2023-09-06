'use client';

import { useAtomValue } from 'jotai';
import { surveyBody } from '../../../store/survey';
import styles from './SubmitSurvey.module.scss';

export function SubmitSurvey() {
  const body = useAtomValue(surveyBody);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(body);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      완료
    </button>
  );
}
