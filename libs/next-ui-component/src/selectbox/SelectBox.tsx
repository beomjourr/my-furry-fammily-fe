'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './SelectBox.module.scss';

interface SelectBoxProps {
  defaultLabel?: string;
  value?: string;
  children?: React.ReactNode;
  onChange?: (value: { label: string; value: string }) => void;
}

export function SelectBox(props: SelectBoxProps) {
  const { defaultLabel, children, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<{
    label: string;
    value: string;
  } | null>(null);

  return (
    <div
      className={classNames(styles.selectbox, {
        [styles.active]: currentValue !== null,
        [styles.open]: isOpen,
      })}
    >
      <div
        className={styles.label}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {currentValue === null ? defaultLabel : currentValue.label}
      </div>
      {isOpen && (
        <div
          className={styles['option-container']}
          onClick={(e) => {
            const targetElement = e.target as HTMLDivElement;

            if (targetElement.childElementCount !== 0) {
              return;
            }

            const label = targetElement.innerText;
            const value = targetElement.getAttribute('data-value') ?? '';

            setCurrentValue({
              label,
              value,
            });

            if (currentValue?.value !== value && value !== null) {
              onChange?.({
                label,
                value,
              });
            }
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
