import { RouteObject } from 'react-router';
import AnimalHospitalsClinicTypes from '../pages/animal-hospitals-clinic-types/search';

export const animalHospitalsClinicTypesRoute: RouteObject[] = [
  {
    path: '/animal-hospitals-clinic-types/search',
    element: <AnimalHospitalsClinicTypes />,
  },
];
