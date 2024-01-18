import { RouteObject } from 'react-router-dom';
import HospitalSearch from '../pages/hospital/search';
import HospitalRegister from '../pages/hospital/register';

export const hospitalRoutes: RouteObject[] = [
  {
    path: '/hospital/search',
    element: <HospitalSearch />,
  },
  {
    path: '/hospital/register/create',
    element: <HospitalRegister type="create" />,
  },
  {
    path: '/hospital/register/edit/:id',
    element: <HospitalRegister type="edit" />,
  },
];
