'use client';
import React, { useState } from 'react';
import styles from './TabItem.module.scss';

interface TabItemProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export function TabItem({ children, onClick, isActive }: TabItemProps) {
  console.log(isActive); //왜 tab 0,1,2가 다 출력되는지?
  return (
    <div className={styles.container} onClick={onClick}>
      <a href="/#" className={`styles.item ${isActive ? 'styles.active' : ''}`}>
        {children}
      </a>
      <div className={styles.selectbar}></div>
    </div>
  );
}
