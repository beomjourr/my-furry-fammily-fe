import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <button className='base'>{children}</button>
  );
}

export default Button;
