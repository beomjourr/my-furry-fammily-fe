import React from 'react';
import styles from './result/page.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
