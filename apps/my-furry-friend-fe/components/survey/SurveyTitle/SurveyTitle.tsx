import React from 'react';
import styles from './SurveyTitle.module.scss';

export interface SurveyTitleProps {
  children: React.ReactNode;
  description?: string;
}

export function SurveyTitle(props: SurveyTitleProps) {
  const { children, description = '' } = props;
  return (
    <>
      <p className={styles.title}>{children}</p>
      {description && <p className={styles.description}>{description}</p>}
    </>
  );
}
