'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { text, className, disabled } = props;
  const [clicked, setCliked] = useState<boolean | undefined>(false);

  const onClick = () => {
    setCliked((prev) => !prev);
  };

  const buttonClasses = classNames(className, {
    [styles.clicked]: clicked,
  });

  return (
    <div className={styles.container}>
      <button className={buttonClasses} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

export default Button;
