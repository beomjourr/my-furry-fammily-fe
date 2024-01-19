import { RouteObject } from 'react-router';
import AnimalInfoSearch from '../pages/animal-info/search';

export const animalInfoRoute: RouteObject[] = [
  {
    path: '/animal-info/search',
    element: <AnimalInfoSearch />,
  },
];
