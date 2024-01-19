import { App, ConfigProvider, theme as AntdTheme } from 'antd';
import { useTheme as useStyledComponentsTheme } from 'styled-components';
import { useTheme } from './ThemeProvider.tsx';

const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const StyledComponentsTheme = useStyledComponentsTheme();

  return (
    <ConfigProvider
      theme={{
        ...AntdTheme,
        token: {
          fontFamily: `Pretendard, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;`,
          colorPrimary: StyledComponentsTheme.colors['$primary-300'],
          colorError: StyledComponentsTheme.colors['$error-color'],
        },
        algorithm:
          currentTheme === 'dark'
            ? [AntdTheme.darkAlgorithm]
            : [AntdTheme.defaultAlgorithm],
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
