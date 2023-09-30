'use client';

import { Provider } from 'jotai';
import { SurveyContainer } from '../../components/survey/SurveyContainer/SurveyContainer';
import { SurveyHeader } from '../../components/survey/SurveyHeader/SurveyHeader';
import styles from './page.module.scss';

export default async function Survey() {
  return (
    <Provider>
      <div className={styles.container}>
        <SurveyHeader />
        <SurveyContainer />
      </div>
    </Provider>
  );
}
