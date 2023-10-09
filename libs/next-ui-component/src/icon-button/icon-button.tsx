import classnames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './icon-button.module.scss';

/* eslint-disable-next-line */
export interface IconButtonProps {
  src: StaticImageData | string;
  className?: string;
  size?: 'small';
  alt?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function IconButton(props: IconButtonProps) {
  const { src, className, alt = '', size = 'small', onClick } = props;
  return (
    <button
      className={classnames(styles['icon-button'], styles[size], className)}
      onClick={onClick}
    >
      <Image src={src} alt={alt}></Image>
    </button>
  );
}

export default IconButton;
