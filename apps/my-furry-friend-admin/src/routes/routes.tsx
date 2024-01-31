import { BrowserRouter, Link, useRoutes } from 'react-router-dom';
import {
  FileTextOutlined,
  ReconciliationOutlined,
  ShopOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import DefaultLayout from '../components/layout/Layout.tsx';
import Home from '../pages';
import { hospitalRoutes } from './hospital.routes.tsx';
import { errorRoute } from './error.routes.tsx';
import { authRoute } from './auth.routes.tsx';
import { animalInfoRoute } from './animal-info.routes.tsx';
import { animalHospitalsClinicTypesRoute } from './hospitals-clinic-types.routes.tsx';
import { animalHospitalsCategoryInfoRoute } from './hospitals-category.routes.tsx';

export const defaultMenuItems = [
  {
    label: '병원 관리',
    key: '/hospital',
    icon: <ShopOutlined />,
    children: [
      { label: '병원 목록', key: '/hospital/search' },
      { label: '병원 등록', key: '/hospital/register/create' },
      {
        label: '병원 수정',
        key: '/hospital/register/edit/:id',
        hidden: true,
      },
      {
        label: '병원 기타정보 수정',
        key: '/hospital/register/options/:id',
        hidden: true,
      },
    ],
  },
  {
    label: '동물 병원 전문 과목 관리',
    key: '/hospitals-category',
    icon: <FileTextOutlined />,
    children: [
      {
        label: '동물 병원 전문 과목 목록',
        key: '/hospitals-category/search',
      },
    ],
  },
  {
    label: '동물 정보 관리',
    key: '/animal-info',
    icon: <SmileOutlined />,
    children: [{ label: '동물 정보 목록', key: '/animal-info/search' }],
  },
  {
    label: '동물병원 진료 유형 관리',
    key: '/hospitals-clinic-types',
    icon: <ReconciliationOutlined />,
    children: [
      {
        label: '동물 진료 유형 목록',
        key: '/hospitals-clinic-types/search',
      },
    ],
  },
];

const contentRoutes = [
  ...hospitalRoutes,
  ...animalInfoRoute,
  ...animalHospitalsClinicTypesRoute,
  ...animalHospitalsCategoryInfoRoute,
];

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
    path: '/',
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
