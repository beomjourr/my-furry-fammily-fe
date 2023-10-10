'use client';
import React, { Children, ReactNode, useState } from 'react';
import styles from './OptionBox.module.scss';

interface OptionBoxProps {
  children: React.ReactNode;
  onClick: () => void;
}
export function OptionBox({ children, onClick }: OptionBoxProps) {
  return <div className={styles.optionbox}>{children}</div>;
}
