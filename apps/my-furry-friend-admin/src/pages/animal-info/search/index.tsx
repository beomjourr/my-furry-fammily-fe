import React from 'react';

const AnimalInfoContainer = React.lazy(
  () => import('./components/Container.tsx'),
);

export default function AnimalInfoSearch() {
  return <AnimalInfoContainer />;
}
