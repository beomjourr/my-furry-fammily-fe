'use client';

import React, { useState } from 'react';
import { fetcher } from '../../utils/fetcher';

function Page() {
  const [data, setData] = useState({
    name: '테스트5',
    tell: '010-1234-5678',
    veterinarian_numbers: 1,
    scale: 'SMALL',
    street_address: '서울 강남구 강남대로 374',
    region: '강남구',
    latitude: 37.507105,
    longitude: 127.03662,
  });

  console.log(data);

  const handleClick = async () => {
    const res = await fetcher.post('/animal-hospitals', data);
    console.log(res);
  };
  return (
    <button type="button" onClick={handleClick}>
      test
    </button>
  );
}

export default Page;
