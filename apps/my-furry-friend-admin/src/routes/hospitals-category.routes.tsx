import { RouteObject } from 'react-router';
import AnimalHospitalsCategory from '../pages/hospitals-category/search';

export const animalHospitalsCategoryInfoRoute: RouteObject[] = [
  {
    path: '/hospitals-category/search',
    element: <AnimalHospitalsCategory />,
  },
];
