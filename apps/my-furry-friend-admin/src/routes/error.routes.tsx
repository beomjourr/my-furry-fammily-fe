import { RouteObject } from 'react-router';
import ErrorLayout from '../components/layout/ErrorLayout.tsx';

export const errorRoute: RouteObject[] = [
  {
    path: '*',
    element: <ErrorLayout />,
  },
];
