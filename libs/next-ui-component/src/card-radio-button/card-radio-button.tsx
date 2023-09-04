import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './card-radio-button.module.scss';

export interface CardRadioButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface RadioButtonGroup {
  value: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function RadioButtonGroup({
  children,
  value,
  onClick,
  className,
}: RadioButtonGroup) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child as React.ReactElement, {
          onClick: handleClick,
          isActive: child.props.value === value,
        });
      })}
    </div>
  );
}

export function CardRadioButton({
  children,
  value,
  isActive,
  onClick,
  className,
  ...rest
}: CardRadioButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={classnames(
        styles['button'],
        styles[isActive ? 'active' : ''],
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
