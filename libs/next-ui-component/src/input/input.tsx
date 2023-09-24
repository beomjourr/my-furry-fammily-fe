'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  countText?: number;
  maxLength?: number;
  validationRule: (value: string) => boolean;
  onChange: (value: string) => void;
}

export function Input(props: InputProps) {
  const {
    label,
    value,
    placeholder,
    helperText,
    maxLength,
    validationRule,
    onChange,
  } = props;
  const [isInvalid, setIsInvalid] = useState(false);
  const [currentLength, setCurrentLength] = useState(value?.length || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValid = validationRule(inputValue);
    setIsInvalid(!isValid);
    onChange(inputValue);
    setCurrentLength(inputValue.length);
  };

  useEffect(() => {
    const isValid = validationRule(value || '');
    setIsInvalid(!isValid);
    setCurrentLength(value?.length || 0);
  }, [validationRule, value]);

  return (
    <div className={styles.frame}>
      {label && <h6 className={styles.label}>{label}</h6>}
      <div className={styles.container}>
        <input
          type="text"
          className={classNames(styles.input, { [styles.invalid]: isInvalid })}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className={styles.bottom}>
        {helperText && <h6 className={styles.helperText}>{helperText}</h6>}
        {maxLength && (
          <h6 className={styles.countText}>
            {currentLength}/{props.maxLength}
          </h6>
        )}
      </div>
    </div>
  );
}

export default Input;
