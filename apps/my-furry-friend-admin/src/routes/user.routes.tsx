import { RouteObject } from 'react-router-dom';
import User from '../pages/User/user';
import Admin from '../pages/User/admin';

export const userRoutes: RouteObject[] = [
  {
    path: '/users/user',
    element: <User />,
  },
  {
    path: '/users/admin',
    element: <Admin />,
  },
];
