import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider } from './provider/ThemeProvider.tsx';
import { GlobalStyles } from './styles/global.ts';
import DefaultRoutes from './routes/routes.tsx';
import AntdConfigProvider from './provider/AntdConfigProvider';
import { theme } from './styles/theme.ts';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StyledComponentsThemeProvider theme={theme}>
        <ThemeProvider attribute="class">
          <AntdConfigProvider>
            <GlobalStyles />
            <DefaultRoutes />
          </AntdConfigProvider>
        </ThemeProvider>
      </StyledComponentsThemeProvider>
    </QueryClientProvider>
  );
};

export default Main;
