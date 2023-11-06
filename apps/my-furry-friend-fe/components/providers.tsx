'use client';

import { Provider } from 'jotai';
import React from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6E9F9',
      100: '#BFC8EF',
      200: '#92A5E5',
      300: '#6282DB',
      400: '#3467D4',
      500: '#004DC8',
      600: '#0045BD',
      700: '#003BB1',
      800: '#0031A5',
      900: '#001F8F',
    },
    badge: {
      background: {
        orange: '#FCF2E3',
        purple: '#F8F2FF',
        pink: '#FFF1F7',
        blue: '#EDF2FF',
      },
      text: {
        orange: '#E4800C',
        purple: '#74499D',
        pink: '#E44ADE',
        blue: '#55499D',
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Provider>{children}</Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
