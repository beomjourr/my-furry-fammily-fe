'use client';

import DaumPostcodeEmbed from 'react-daum-postcode';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useLocation from '../../hooks/useLocation';
import { fetchAddressTransCoord } from '../../service/address';

export default function Page() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const { setSearchLocation } = useLocation();

  const { data, isSuccess } = useQuery({
    queryKey: ['/kakao-address-trans-api', searchValue],
    queryFn: () => fetchAddressTransCoord(searchValue),
    enabled: !!searchValue,
  });

  useEffect(() => {
    if (isSuccess) {
      const [region] = data.data.documents;
      setSearchLocation({
        latitude: region?.y,
        longitude: region?.x,
      });
      router.push('/');
    }
  }, [data, isSuccess, router, setSearchLocation]);

  const handleComplete = (daumAddress: {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
  }) => {
    let fullAddress = daumAddress.address;
    let extraAddress = '';

    if (daumAddress.addressType === 'R') {
      if (daumAddress.bname !== '') {
        extraAddress += daumAddress.bname;
      }
      if (daumAddress.buildingName !== '') {
        extraAddress +=
          extraAddress !== ''
            ? `, ${daumAddress.buildingName}`
            : daumAddress.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setSearchValue(fullAddress);
  };

  return (
    <DaumPostcodeEmbed
      onComplete={handleComplete}
      style={{
        height: '100%',
      }}
    />
  );
}
