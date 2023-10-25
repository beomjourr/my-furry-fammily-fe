'use client';
import React from 'react';
import classNames from 'classnames';
import styles from './TabItem.module.scss';

interface TabItemProps {
  children: string;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export function TabItem({ onClick, isActive, children }: TabItemProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <a
        href="/#"
        className={classNames(styles.item, { [styles.active]: isActive })}
      >
        {children}
      </a>
      <div
        className={`${styles.basic} ${isActive ? styles.activebar : ''}`}
      ></div>
    </div>
  );
}
