import React, { useEffect, useState } from 'react';
import styles from './input.module.scss';

export interface InputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  countText?: number;
  maxLength?: number;
  validationRule: (value: string) => boolean;
}

export function Input(props: InputProps) {
  const { label, placeholder, helperText, maxLength, validationRule } = props;
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const currentLength = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValid = validationRule(inputValue);
    setIsInvalid(!isValid);
    setValue(inputValue);
  };

  useEffect(() => {
    const isValid = validationRule(value);
    setIsInvalid(!isValid);
  }, [validationRule, value]);

  return (
    <div className={styles.frame}>
      {label && <h6 className={styles.label}>{label}</h6>}
      <div className={styles.container}>
        <input
          type="text"
          className={`${styles.input} ${isInvalid ? styles.invalid : ''}`}
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
