import React from 'react';

const HospitalContainer = React.lazy(
  () => import('./components/Container.tsx'),
);

const HospitalSearch = () => {
  return <HospitalContainer />;
};

export default HospitalSearch;
