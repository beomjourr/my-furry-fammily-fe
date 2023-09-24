// import React, { useState } from 'react';
// import styles from './selectbox.module.scss';

// export function DateSelector() {
//   const years = Array.from({ length: 10 }, (_, index) => 2023 - index);

//   const months = Array.from({ length: 12 }, (_, index) => index + 1);

//   const days = Array.from({ length: 31 }, (_, index) => index + 1);

//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedDay, setSelectedDay] = useState('');

//   return (
//     <div className={styles.dateSelector}>
//       <div
//         className={styles.box}
//         onChange={(e) => setSelectedYear(e.target.value)}
//       >
//         <option value="">년</option>
//         {years.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </div>

//       <div
//         className={styles.box}
//         onChange={(e) => setSelectedMonth(e.target.value)}
//       >
//         <option value="">월</option>
//         {months.map((month) => (
//           <option key={month} value={month}>
//             {month}
//           </option>
//         ))}
//       </div>

//       <div
//         className={styles.box}
//         onChange={(e) => setSelectedDay(e.target.value)}
//       >
//         <option value="">일</option>
//         {days.map((day) => (
//           <option key={day} value={day}>
//             {day}
//           </option>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DateSelector;
