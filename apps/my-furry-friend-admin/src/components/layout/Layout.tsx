import { Layout } from 'antd';
import BreadcrumbPageHeader from '../common/breadcrumb/BreadcrumbPageHeader.tsx';
import SideMenu from '../common/side-menu/SideMenu.tsx';
import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import ListSkeleton from '../common/spinner/Spinner.tsx';
import { Suspense, useState } from 'react';
import ErrorBoundary from '../error-boundary/ErrorBoundary.tsx';

const { Content } = Layout;

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openDrawerHandler = () => {
    setIsOpenDrawer(true);
  };

  const closeDrawerHandler = () => {
    setIsOpenDrawer(false);
  };

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu
        isOpenDrawer={isOpenDrawer}
        onCloseDrawer={closeDrawerHandler}
        collapsed={collapsed}
      />
      <Layout>
        <Header
          collapsed={collapsed}
          onToggleCollapsed={toggleCollapsed}
          onOpenDrawer={openDrawerHandler}
        />
        <Content style={{ margin: '0 16px' }}>
          <BreadcrumbPageHeader />
          <ErrorBoundary>
            <Suspense fallback={<ListSkeleton />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
