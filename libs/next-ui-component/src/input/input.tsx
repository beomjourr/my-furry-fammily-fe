import React, { useState } from 'react';
import styles from './input.module.scss';

export interface InputProps {
  label?: string;
}

export function Input(props: InputProps) {
  const { label } = props;
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  // 현재 글자 수, 최대 글자 수
  const currentLength = value.length;
  const maxLength = 300;

  const handleClear = () => {
    setValue('');
    setIsInvalid(false); //지우기 버튼 클릭 시 유효성 검사 초기화
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length >= 10) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setValue(inputValue);
  };

  return (
    <div className={styles.frame}>
      <h6 className={styles.label}>{label}</h6>
      <div className={styles.container}>
        <input
          type="text"
          className={`${styles.input} ${isInvalid ? styles.invalid : ''}`}
          placeholder="입력하세요" //질문에 맞는 placeholder 작성 방법
          value={value}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleClear}>
          x
        </button>
      </div>
      <div className={styles.bottom}>
        <h6 className={styles.helperText}>Helper text</h6>
        <h6 className={styles.countText}>
          {currentLength}/{maxLength}
        </h6>
      </div>
    </div>
  );
}

export default Input;
