import { useEffect, useMemo } from 'react';
import { getMenuItems } from '../../../routes/routes.tsx';
import { Drawer, Layout, Menu, MenuProps } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useBreakPoint from '../../../hooks/useBreakPoint.ts';

const { Sider } = Layout;

interface SideMenuProps extends MenuProps {
  collapsed: boolean;
  onCloseDrawer: () => void;
  isOpenDrawer: boolean;
}

interface SideMenuItemProps extends MenuProps {
  onCloseDrawer?: () => void;
}

const SideMenuItem = ({ onCloseDrawer, ...rest }: SideMenuItemProps) => {
  const location = useLocation();

  const items = useMemo(() => {
    return getMenuItems();
  }, []);

  return (
    <Menu
      {...rest}
      mode="inline"
      style={{ borderRight: 0 }}
      items={items}
      selectedKeys={[location.pathname]}
      defaultOpenKeys={[location.pathname.split('/', 2).join('/')]}
      onClick={onCloseDrawer}
    />
  );
};

const SideMenu = ({
  collapsed,
  onCloseDrawer,
  isOpenDrawer,
}: SideMenuProps) => {
  const screens = useBreakPoint('md');

  useEffect(() => {
    if (screens) {
      onCloseDrawer();
    }
  }, [onCloseDrawer, screens]);

  return (
    <>
      {screens ? (
        <Sider
          width={220}
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div>Menu Header</div>
          <SideMenuItem />
        </Sider>
      ) : (
        <StyledDrawer
          placement="left"
          width={500}
          onClose={onCloseDrawer}
          open={isOpenDrawer}
        >
          <SideMenuItem onCloseDrawer={onCloseDrawer} />
        </StyledDrawer>
      )}
    </>
  );
};

export default SideMenu;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-header-title {
    justify-content: flex-end;
  }

  .ant-drawer-header.ant-drawer-header-close-only {
    padding: 16px 0;
  }
`;
