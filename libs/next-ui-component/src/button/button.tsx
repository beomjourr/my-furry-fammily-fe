'use client';

import Image from 'next/image';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  text: string;
  className: string;
  leftImage: string;
  rightImage: string;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
  const { text, className, leftImage, rightImage, disabled, onClick } = props;

  return (
    <button
      className={classNames(styles['button'], styles[className])}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {leftImage && <Image src={leftImage} alt="img" width={24} height={24} />}
      <span>{text}</span>
      {rightImage && (
        <Image src={rightImage} alt="img" width={24} height={24} />
      )}
    </button>
  );
}

export default Button;
