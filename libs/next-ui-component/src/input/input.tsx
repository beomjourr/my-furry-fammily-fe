import React, { useEffect, useState } from 'react';
import styles from './input.module.scss';

export interface InputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  countText?: number;
  currentLength?: number;
  maxLength?: number;
  validationRule: (value: string) => boolean;
}

export function Input(props: InputProps) {
  const {
    label,
    placeholder,
    helperText,
    currentLength,
    maxLength,
    validationRule,
  } = props;
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  // 현재 글자 수, 최대 글자 수

  // const handleClear = () => {
  //   setValue('');
  //   setIsInvalid(false); //지우기 버튼 클릭 시 유효성 검사 초기화
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValid = validationRule(inputValue);

    setIsInvalid(!isValid);
    setValue(inputValue);
  };

  useEffect(() => {
    // currentLength가 변경될 때도 유효성 검사 수행
    const isValid = validationRule(value);
    setIsInvalid(!isValid);
  }, [currentLength, validationRule, value]);

  return (
    <div className={styles.frame}>
      {label && <h6 className={styles.label}>{label}</h6>}
      <div className={styles.container}>
        <input
          type="text"
          className={`${styles.input} ${isInvalid ? styles.invalid : ''}`}
          placeholder={placeholder} //질문에 맞는 placeholder 작성 방법
          value={value}
          onChange={handleChange}
        />
        {/* <button className={styles.button} onClick={handleClear}>
          x
        </button> */}
      </div>
      <div className={styles.bottom}>
        {helperText && <h6 className={styles.helperText}>{helperText}</h6>}
        {maxLength && (
          <h6 className={styles.countText}>
            {props.currentLength}/{props.maxLength}
          </h6>
        )}
      </div>
    </div>
  );
}

export default Input;
