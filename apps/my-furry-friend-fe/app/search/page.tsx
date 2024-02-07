'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import SearchFilterButtonGroup from '../../components/search/SearchFilterButtonGroup';
import SearchRecent from '../../components/search/SearchRecent';
import SearchContainer from '../../components/search/SearchContainer';
import SearchHeaderInput from '../../components/search/SearchHeaderInput';
import { Header } from '../../components/Header/Header';

function Page() {
  const [keyword, setKeyword] = useState('');
  const [searchRecentFocus, setSearchRecentFocus] = useState(false);
  const [displayMap, setDisplayMap] = useState(false);

  return (
    <div className={styles.container}>
      <Header isBack className={styles.header}>
        <SearchHeaderInput
          keyword={keyword}
          setKeyword={setKeyword}
          setSearchRecentFocus={setSearchRecentFocus}
        />
      </Header>

      <SearchFilterButtonGroup
        displayMap={displayMap}
        setDisplayMap={setDisplayMap}
      />
      <SearchRecent
        setKeyword={setKeyword}
        searchRecentFocus={searchRecentFocus}
        setSearchRecentFocus={setSearchRecentFocus}
      />
      <SearchContainer
        keyword={keyword}
        searchRecentFocus={searchRecentFocus}
        displayMap={displayMap}
      />
    </div>
  );
}

export default Page;
