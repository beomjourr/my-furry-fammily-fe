'use client';

import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './result/page.module.scss';
import SearchHeaderInput from '../../components/search/SearchHeaderInput';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header isBack className={styles.header}>
        <SearchHeaderInput />
      </Header>
      {children}
    </div>
  );
}

export default Layout;
