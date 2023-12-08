'use client';

import React, { useState } from 'react';
import { fetcher } from '../../utils/fetcher';

// TODO: 데이터 등록하려고 만든 페이지
function Page() {
  const [data, setData] = useState({
    name: '테스트 동물병원',
    tell: '010-1234-5678',
    veterinarian_numbers: 1,
    scale: 'SMALL',
    street_address: '서울 강남구 강남대로 374',
    region: 'GANGNAM',
    latitude: 37.507019,
    longitude: 127.03772,
    is_cooperation: false,
  });

  console.log(data);

  const handleClick = async () => {
    const res = await fetcher.post('/animal-hospitals', data);
  };

  const handleCategoriesClick = async (id: string) => {
    const res = await fetcher.post(`/animal-hospitals/${id}/category`, {
      categories: ['테스트3'],
    });
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        test
      </button>
      <button type="button" onClick={() => handleCategoriesClick('1')}>
        categories
      </button>
    </>
  );
}

export default Page;
