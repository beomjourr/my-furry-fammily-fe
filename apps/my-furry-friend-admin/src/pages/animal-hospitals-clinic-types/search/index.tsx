import React from 'react';

const AnimalHospitalsClinicTypesContainer = React.lazy(
  () => import('./components/Container.tsx'),
);

export default function AnimalHospitalsClinicTypes() {
  return <AnimalHospitalsClinicTypesContainer />;
}
