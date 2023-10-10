'use client';
import React, { useState } from 'react';
import styles from './SelectBox.module.scss';

const Options = [
  { label: '2020년', value: '2020' },
  { label: '2021년', value: '2021' },
  { label: '2022년', value: '2022' },
  { label: '2023년', value: '2023' },
  { label: '2024년', value: '2024' },
];

export interface SelectBoxOptionProps {
  value: string;
  label: string;
  classNames?: string;
  onChange?: React.ChangeEventHandler;
}

export function SelectBoxOption(props: SelectBoxOptionProps) {
  const { value, label, classNames } = props;

  return (
    <option value={value} className={classNames}>
      {label}
    </option>
  );
}

export interface SelectBoxProps {
  value: string;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler;
}

export function SelectBox(props: SelectBoxProps) {
  const { value, children, onChange } = props;

  return (
    <select className={styles.box} value={value} onChange={onChange}>
      <option value="">{children}</option>
      {Options.map((option) => (
        <SelectBoxOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </select>
  );
}

export default SelectBox;
