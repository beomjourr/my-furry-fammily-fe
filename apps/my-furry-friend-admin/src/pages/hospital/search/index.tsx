import React from 'react';

const HospitalContainer = React.lazy(
  () => import('./components/Container.tsx'),
);

export default function HospitalSearch() {
  return <HospitalContainer />;
}
