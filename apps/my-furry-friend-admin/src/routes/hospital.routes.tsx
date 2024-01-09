import { RouteObject } from 'react-router-dom';
import HospitalSearch from '../pages/hospital/search';
import HospitalSearchConditions from '../pages/hospital/search-conditions';
import HospitalRegister from '../pages/hospital/register';
import CategoryRegister from '../pages/hospital/category/register';
import CategoryListRegister from '../pages/hospital/category/list-register';

export const hospitalRoutes: RouteObject[] = [
  {
    path: '/hospital/search',
    element: <HospitalSearch />,
  },
  {
    path: '/hospital/search/conditions',
    element: <HospitalSearchConditions />,
  },
  {
    path: '/hospital/register',
    element: <HospitalRegister />,
  },
  {
    path: '/hospital/category/list/register',
    element: <CategoryListRegister />,
  },
  {
    path: '/hospital/category/register',
    element: <CategoryRegister />,
  },
];
