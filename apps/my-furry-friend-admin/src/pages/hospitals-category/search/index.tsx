import React from 'react';

const AnimalHospitalCategoryContainer = React.lazy(
  () => import('./components/Container.tsx'),
);

export default function AnimalHospitalsCategory() {
  return <AnimalHospitalCategoryContainer />;
}
