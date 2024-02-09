'use client';

import { Provider } from 'jotai';
import React from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
    gray: {
      300: '#F5F5F7',
      400: '#E3E3E8',
      500: '#BCBCC4',
      600: '#9A9AA1',
      700: '#545459',
      800: '#323236',
      900: '#0F0F12',
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
  components: {
    Alert: {
      variants: {
        toast: {
          container: {
            bg: 'gray.700',
            color: 'white',
          },
          title: {
            fontWeight: '400',
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: 'gray.400',
          _checked: {
            bg: '#E6E9F9',
            borderColor: '#6282DB',
            _hover: {
              bg: '#E6E9F9',
              borderColor: '#6282DB',
            },
          },
          _hover: {
            bg: '#E6E9F9',
            borderColor: '#6282DB',
          },
          _focus: {
            boxShadow: 'none',
            _checked: {
              boxShadow: 'none',
            },
          },
        },
      },
    },
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Provider>{children}</Provider>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
