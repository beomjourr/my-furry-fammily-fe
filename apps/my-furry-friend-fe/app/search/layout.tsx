'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SearchInput } from '@my-furry-family/next-ui-component';
import { Header } from '../../components/Header/Header';
import styles from './result/page.module.scss';
import { Providers } from '../../components/Providers';

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
          <div className="w-full mr-[16px] ml-[10px]">
            <SearchInput placeholder="병원명으로 검색해보세요." />
          </div>
        </Header>
        {children}
      </div>
    </Providers>
  );
}

export default Layout;
