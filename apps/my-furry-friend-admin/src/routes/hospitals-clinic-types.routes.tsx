import { RouteObject } from 'react-router';
import AnimalHospitalsClinicTypes from '../pages/hospitals-clinic-types/search';

export const animalHospitalsClinicTypesRoute: RouteObject[] = [
  {
    path: '/hospitals-clinic-types/search',
    element: <AnimalHospitalsClinicTypes />,
  },
];
