'use client';

import { IconButton, ProgressBar } from '@my-furry-family/next-ui-component';
import backArrow from '@my-furry-family/images/ico_back.png';
import { useAtom } from 'jotai';
import { surveyCurrentPageIndex } from '../../../store/survey';
import styles from './SurveyHeader.module.scss';

const SURVEY_PAGE_LENGTH = 12;

export function SurveyHeader() {
  const [pageIndex, setPageIndex] = useAtom(surveyCurrentPageIndex);

  const handleBackClick = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <>
      <div className={styles.container}>
        {pageIndex !== 0 && (
          <div className={styles.left}>
            <IconButton
              className={styles.back}
              src={backArrow}
              alt="back"
              onClick={handleBackClick}
            />
          </div>
        )}
      </div>
      <ProgressBar max={SURVEY_PAGE_LENGTH} current={pageIndex + 1} />
    </>
  );
}
