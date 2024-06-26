import { useEffect, useMemo } from 'react';
import { Drawer, Layout, Menu, MenuProps } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getMenuItems } from '../../../routes/routes.tsx';
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

  const filteredItems = useMemo(() => {
    return items.map((item) => {
      if (item.children) {
        const children = item.children.filter(
          (child: { hidden: boolean }) => !child.hidden,
        );
        return { ...item, children };
      }
      return item;
    });
  }, [items]);

  return (
    <Menu
      mode="inline"
      style={{ borderRight: 0 }}
      items={filteredItems}
      selectedKeys={[location.pathname]}
      defaultOpenKeys={[location.pathname.split('/', 2).join('/')]}
      onClick={onCloseDrawer}
      {...rest}
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
