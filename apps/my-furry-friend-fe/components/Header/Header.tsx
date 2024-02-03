'use client';

import { IconButton } from '@my-furry-family/next-ui-component';
import backArrow from '@my-furry-family/images/ico_back.png';
import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import styles from './Header.module.scss';

interface Props {
  isBack: boolean;
  className?: string;
  children?: React.ReactNode;
  onBackClick?: () => void;
}

export function Header(props: Props) {
  const router = useRouter();
  const {
    isBack,
    className,
    children,
    onBackClick = () => router.back(),
  } = props;

  return (
    <div className={classNames(styles.container, className)}>
      {isBack && (
        <div className={styles.left}>
          <IconButton
            className={styles.back}
            src={backArrow}
            alt="back"
            onClick={onBackClick}
          />
        </div>
      )}
      {children}
    </div>
  );
}
