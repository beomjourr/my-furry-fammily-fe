import React, { useState } from 'react';
import styles from './selectbox.module.scss';

export function DateSelector() {
  // 연도 선택 목록
  const years = Array.from({ length: 10 }, (_, index) => 2023 - index); // 최근 10년간의 연도
  // 월 선택 목록 (1월부터 12월까지)
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  // 일 선택 목록 (1일부터 31일까지)
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  // 선택한 연도, 월, 일을 저장하는 상태
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div className={styles.dateSelector}>
      <select
        className={styles.box}
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">년</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        className={styles.box}
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="">월</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <select
        className={styles.box}
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        <option value="">일</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DateSelector;
