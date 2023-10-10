'use client';
import React, { Children, useState } from 'react';
import styles from './SelectBox.module.scss';

interface Option {
  label: string;
  value: string;
}

const Options: Option[] = [
  { label: '2020년', value: '2020' },
  { label: '2021년', value: '2021' },
  { label: '2022년', value: '2022' },
  { label: '2023년', value: '2023' },
  { label: '2024년', value: '2024' },
];

interface SelectBoxProps {
  value?: string;
  onClick: () => void;
}

function SelectBox({ onClick, value }: SelectBoxProps) {
  return (
    <div className={styles.selectbox} onClick={onClick}>
      <div>{value}</div>
    </div>
  );
}

export function SelectContainer() {
  const [isShown, setIsShown] = useState(false);
  const [value, setValue] = useState('');

  const handleOptionClick = (optionValue: string) => {
    setValue(optionValue);
    setIsShown(false);
  };
  return (
    <>
      <SelectBox onClick={() => setIsShown(!isShown)} value={value} />
      <OptionBox isShown={isShown} onSelect={handleOptionClick} />
    </>
  );
}
