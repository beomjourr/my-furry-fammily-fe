import {ReactNode} from 'react';
import Button from '../../atom/Button/Button';
import styles from './icon-button.module.scss';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface IconButtonProps {
  size?: 'small' | 'medium'
  children?: ReactNode
}

export function IconButton(props: IconButtonProps) {
  const {children, size = 'small'} = props;
  return (
    <Button className={classnames(styles['icon-button'], styles[size])}>{children}</Button>
  );
}

export default IconButton;
