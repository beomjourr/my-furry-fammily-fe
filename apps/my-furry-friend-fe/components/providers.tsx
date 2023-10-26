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
