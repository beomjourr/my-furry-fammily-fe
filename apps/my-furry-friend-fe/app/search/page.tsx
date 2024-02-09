'use client';

import React from 'react';
import styles from './page.module.scss';
import SearchFilterButtonGroup from '../../components/search/SearchFilterButtonGroup';
import SearchRecent from '../../components/search/SearchRecent';
import SearchContainer from '../../components/search/SearchContainer';

function Page() {
  return (
    <div className={styles.container}>
      <SearchFilterButtonGroup />
      <SearchRecent />
      <SearchContainer />
    </div>
  );
}

export default Page;
