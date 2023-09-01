import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './icon-button.module.scss';

/* eslint-disable-next-line */
export interface IconButtonProps {
  size?: 'small';
  children?: ReactNode;
}

export function IconButton(props: IconButtonProps) {
  const { children, size = 'small' } = props;
  return (
    <button className={classnames(styles['icon-button'], styles[size])}>
      {children}
    </button>
  );
}

export default IconButton;
