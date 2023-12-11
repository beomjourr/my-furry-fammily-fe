'use client';

import React, { useState } from 'react';
import { fetcher } from '../../utils/fetcher';

// TODO: 데이터 등록하려고 만든 페이지
function Page() {
  const [data, setData] = useState({
    name: '테스트 동물병원3',
    tell: '010-1234-5678',
    veterinarian_numbers: 1,
    scale: 'LARGE',
    street_address: '서울 강남구 강남대로 374',
    region: 'GANGNAM',
    latitude: 37.517029,
    longitude: 127.05872,
    is_cooperation: true,
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

  const handleCategoriesListClick = async () => {
    const res = await fetcher.post(`/animal-hospitals/category`, {
      categories: [
        {
          name: '테스트1',
          description: '테스트1',
        },
        {
          name: '테스트2',
          description: '테스트2',
        },
        {
          name: '테스트3',
          description: '테스트3',
        },
        {
          name: '테스트4',
          description: '테스트4',
        },
        {
          name: '테스트5',
          description: '테스트5',
        },
      ],
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
      <button type="button" onClick={handleCategoriesListClick}>
        categories List
      </button>
    </>
  );
}

export default Page;
