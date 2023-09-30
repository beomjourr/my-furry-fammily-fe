'use client';

import { Provider } from 'jotai';
import { SurveyContainer } from '../../components/survey/SurveyContainer/SurveyContainer';
import { SignUpHeader } from '../../components/SignUpHeader/SignUpHeader';
import styles from './page.module.scss';

export default async function Survey() {
  return (
    <Provider>
      <div className={styles.container}>
        <SignUpHeader />
        <SurveyContainer />
      </div>
    </Provider>
  );
}
