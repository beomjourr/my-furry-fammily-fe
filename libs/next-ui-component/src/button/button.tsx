'use client';

import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'filled' | 'outline';
  className: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { type, className, children, ...attr } = props;

  return (
    <button
      className={classNames(styles['button'], styles[type], className)}
      type="button"
      {...attr}
    >
      {children}
    </button>
  );
}

export default Button;
