import { DefaultTheme } from 'styled-components';

const colors = {
  '$primary-900': '#001f8f',
  '$primary-800': '#0031a5',
  '$primary-700': '#003bb1',
  '$primary-600': '#0045bd',
  '$primary-500': '#004dc8',
  '$primary-400': '#3467d4',
  '$primary-300': '#6282db',
  '$primary-200': '#92a5e5',
  '$primary-100': '#bfc8ef',
  '$primary-50': '#e6e9f9',

  '$gray-900': '#0f0f12',
  '$gray-700': '#323236',
  '$gray-600': '#545459',
  '$gray-500': '#75757d',
  '$gray-400': '#bcbcc4',
  '$gray-300': '#e3e3e8',
  '$gray-200': '#f5f5f7',

  '$background-color': '#fffdf9',
  '$error-color': '#ff3d3d',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
