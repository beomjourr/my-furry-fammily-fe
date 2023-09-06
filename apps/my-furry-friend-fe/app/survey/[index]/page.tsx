'use client';

import { ProgressBar } from '@my-furry-family/next-ui-component';
import { useMemo } from 'react';
import { RequestCurator } from '../../../components/survey/RequestCurator/RequestCurator';
import { DogOrCat } from '../../../components/survey/DogOrCat/DogOrCat';
import { SignUpHeader } from '../../../components/SignUpHeader/SignUpHeader';
import styles from './page.module.scss';

const SURVEY_PAGE_LENGTH = 13;

export default async function Survey({
  params,
}: {
  params: { index: string };
}) {
  const pageIndex = parseInt(params.index, 10);

  const innerPage = useMemo(() => {
    switch (pageIndex) {
      case 1:
        return <DogOrCat />;
        break;
      case 13:
        return <RequestCurator />;
      default:
        return <DogOrCat />;
    }
  }, [pageIndex]);

  return (
    <div className={styles.container}>
      <SignUpHeader />
      <ProgressBar max={SURVEY_PAGE_LENGTH} current={pageIndex} />
      <div className={styles.innerContainer}>{innerPage}</div>
    </div>
  );
}
