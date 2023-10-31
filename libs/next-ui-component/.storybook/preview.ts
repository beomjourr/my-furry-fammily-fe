import './global.scss';
import type { Preview } from '@storybook/react';
import { extendTheme } from '@chakra-ui/react';

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

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
