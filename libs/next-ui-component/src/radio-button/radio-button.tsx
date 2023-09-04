import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './radio-button.module.scss';

export interface RadioButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  selectValue?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface RadioButtonGroup {
  value: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export function RadioButtonGroup({
  children,
  value,
  onClick,
}: RadioButtonGroup) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child as React.ReactElement, {
          onClick: handleClick,
          selectValue: value,
        });
      })}
    </>
  );
}

export function RadioButton({
  children,
  value,
  selectValue,
  onClick,
  className,
  ...rest
}: RadioButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={classnames(
        styles['button'],
        styles[selectValue === value ? 'active' : ''],
        className,
      )}
      value={value}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}
