import React, { useState } from 'react';

import styles from './input.module.scss';

// export interface SnsButtonProps {
//   type: 'kakao';
// }

export function Input() {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleClear = () => {
    setValue('');
    setIsInvalid(false); //지우기 버튼 클릭 시 유효성 검사 초기화
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!inputValue) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    setValue(inputValue);
  };

  return (
    <form>
      <h6>가나다</h6>
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
    </form>
  );
}

export default Input;
