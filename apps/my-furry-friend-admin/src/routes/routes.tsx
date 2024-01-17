import { BrowserRouter, Link, useRoutes } from 'react-router-dom';
import { ShopOutlined, UserOutlined } from '@ant-design/icons';
import DefaultLayout from '../components/layout/Layout.tsx';
import Home from '../pages/home';
import { hospitalRoutes } from './hospital.routes.tsx';
import { errorRoute } from './error.routes.tsx';
import { userRoutes } from './user.routes.tsx';
import { authRoute } from './auth.routes.tsx';

export const defaultMenuItems = [
  {
    label: '회원 관리',
    key: '/users',
    icon: <UserOutlined />,
    children: [
      { label: '운영 회원 관리', key: '/users/admin' },
      { label: '일반 회원 관리', key: '/users/user' },
    ],
  },
  {
    label: '병원 관리',
    key: '/hospital',
    icon: <ShopOutlined />,
    children: [
      { label: '병원 목록', key: '/hospital/search' },
      { label: '검색 조건 목록', key: '/hospital/search/conditions' },
      { label: '병원 신규 등록', key: '/hospital/register' },
      {
        label: '병원 카테고리 목록 등록',
        key: '/hospital/category/list/register',
      },
      { label: '병원 카테고리 등록', key: '/hospital/category/register' },
    ],
  },
];

const contentRoutes = [...userRoutes, ...hospitalRoutes];
export const getMenuItems = () => {
  const filteredItems: any[] = [];

  if (contentRoutes) {
    defaultMenuItems.forEach((item) => {
      if (item.children) {
        item.children.forEach(({ label, ...child }) => {
          if (contentRoutes.find((r) => r.path === child!.key)) {
            const pushedItem = filteredItems.find(
              (i) => i && i.key === item.key,
            );
            const singleItem = {
              label: <Link to={child.key}>{label}</Link>,
              ...child,
            };

            if (pushedItem) {
              pushedItem.children.push(singleItem);
            } else {
              const { children, ...rest } = item;
              filteredItems.push({ ...rest, children: [singleItem] });
            }
          }
        });
      } else {
        filteredItems.push(item);
      }
    });
  }

  return filteredItems;
};

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '',
    element: <DefaultLayout />,
    children: contentRoutes,
  },
  ...errorRoute,
  ...authRoute,
];

const Routes = () => {
  return useRoutes(routes);
};

const DefaultRoutes = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default DefaultRoutes;
