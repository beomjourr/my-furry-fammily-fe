'use client';

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  text: string;
  className: string;
  leftImage: string;
  rightImage: string;
  disabled: boolean;
}

export function Button(props: ButtonProps) {
  const { text, className, leftImage, rightImage, disabled } = props;
  const [isClicked, setIsCliked] = useState<boolean | undefined>(false);

  const onClick = () => {
    setIsCliked((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button
        className={classNames(
          styles['button'],
          styles[className],
          styles[isClicked ? 'clicked' : ''],
        )}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {leftImage && (
          <Image src={leftImage} alt="img" width={24} height={24} />
        )}
        <span>{text}</span>
        {rightImage && (
          <Image src={rightImage} alt="img" width={24} height={24} />
        )}
      </button>
    </div>
  );
}

export default Button;
