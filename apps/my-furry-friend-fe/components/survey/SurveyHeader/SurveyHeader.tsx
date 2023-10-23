'use client';

import { ProgressBar } from '@my-furry-family/next-ui-component';
import { useAtom } from 'jotai';
import { surveyCurrentPageIndex } from '../../../store/survey';
import { Header } from '../../Header/Header';

const SURVEY_PAGE_LENGTH = 12;

export function SurveyHeader() {
  const [pageIndex, setPageIndex] = useAtom(surveyCurrentPageIndex);

  const handleBackClick = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <>
      <Header isBack={pageIndex !== 0} onBackClick={handleBackClick} />
      <ProgressBar max={SURVEY_PAGE_LENGTH} current={pageIndex + 1} />
    </>
  );
}
