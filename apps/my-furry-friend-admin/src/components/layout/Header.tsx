import { Button, Layout, Select, theme as AntdTheme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useTheme } from '../../provider/ThemeProvider.tsx';
import useBreakPoint from '../../hooks/useBreakPoint.ts';

const { Header: AntdHeader } = Layout;

interface HeaderProps {
  collapsed: boolean;
  onToggleCollapsed: () => void;
  onOpenDrawer: () => void;
}
const Header = ({
  collapsed,
  onToggleCollapsed,
  onOpenDrawer,
}: HeaderProps) => {
  const {
    token: { colorBgContainer },
  } = AntdTheme.useToken();
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const screens = useBreakPoint('md');

  return (
    <AntdHeader
      style={{
        background: currentTheme === 'dark' ? colorBgContainer : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {screens ? (
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggleCollapsed}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      ) : (
        <Button onClick={onOpenDrawer}>
          <MenuUnfoldOutlined />
        </Button>
      )}

      <Select
        defaultValue={currentTheme}
        style={{ width: 120 }}
        onChange={(value) => {
          setTheme(value);
        }}
        options={[
          { value: 'light', label: 'Light ☀️' },
          { value: 'dark', label: 'Dark 🌙' },
          { value: 'system', label: 'System 💻' },
        ]}
      />
    </AntdHeader>
  );
};

export default Header;
