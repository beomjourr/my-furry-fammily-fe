'use client';

import { SurveyContainer } from '../../components/survey/SurveyContainer/SurveyContainer';
import { SurveyHeader } from '../../components/survey/SurveyHeader/SurveyHeader';
import styles from './page.module.scss';

export default async function Survey() {
  return (
    <div className={styles.container}>
      <SurveyHeader />
      <SurveyContainer />
    </div>
  );
}
