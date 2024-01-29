import { RouteObject } from 'react-router';
import Auth from '../pages/auth';

export const authRoute: RouteObject[] = [
  {
    path: '/auth',
    element: <Auth />,
  },
];
