import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  const { children, className, ...otherProps } = props;
  return (
    <button className={classNames(styles.base, className)} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
