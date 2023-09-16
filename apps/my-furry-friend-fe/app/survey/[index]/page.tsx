'use client';

import { ProgressBar } from '@my-furry-family/next-ui-component';
import { SurveyContainer } from '../../../components/survey/SurveyContainer/SurveyContainer';
import { SignUpHeader } from '../../../components/SignUpHeader/SignUpHeader';
import styles from './page.module.scss';

const SURVEY_PAGE_LENGTH = 13;

export default async function Survey({
  params,
}: {
  params: { index: string };
}) {
  const pageIndex = parseInt(params.index, 10);

  return (
    <div className={styles.container}>
      <SignUpHeader />
      <ProgressBar max={SURVEY_PAGE_LENGTH} current={pageIndex + 1} />
      <SurveyContainer pageIndex={pageIndex} />
    </div>
  );
}
