'use client';
import React from 'react';
import styles from './OptionBox.module.scss';

interface OptionBoxProps {
  children: React.ReactNode;
  value: string;
  onClick?: () => void;
}

export function OptionBox({ children, value, onClick }: OptionBoxProps) {
  return (
    <div className={styles.optionbox} onClick={onClick} data-value={value}>
      {children}
    </div>
  );
}
