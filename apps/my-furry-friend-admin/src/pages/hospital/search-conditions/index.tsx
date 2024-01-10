import React from 'react';

const HospitalSearchConditionsContainer = React.lazy(
  () => import('./components/Container.tsx'),
);

const HospitalSearchConditions = () => {
  return <HospitalSearchConditionsContainer />;
};

export default HospitalSearchConditions;
