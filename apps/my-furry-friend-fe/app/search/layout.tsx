'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header/Header';
import styles from './result/page.module.scss';
import { Providers } from '../../components/Providers';
import SearchHeaderInput from '../../components/search/SearchHeaderInput';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Providers>
      <div className={styles.container}>
        <Header
          isBack
          className={styles.header}
          onBackClick={() => router.back()}
        >
          <SearchHeaderInput />
        </Header>
        {children}
      </div>
    </Providers>
  );
}

export default Layout;
