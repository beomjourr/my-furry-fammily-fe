'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header/Header';
import styles from '../search/result/page.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header
        isBack
        className={styles.header}
        onBackClick={() => router.back()}
      >
        <h2 className="flex-1">주소 검색하기</h2>
      </Header>
      {children}
    </div>
  );
}

export default Layout;
