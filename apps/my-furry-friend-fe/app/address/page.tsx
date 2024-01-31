'use client';

import DaumPostcodeEmbed from 'react-daum-postcode';
import useSWR from 'swr';
import { useAtom } from 'jotai/index';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { fetchAddressTransCoord } from '../../service/address';
import { searchLocationState } from '../../store/location';

export default function Page() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchLocation] = useAtom(searchLocationState);

  useSWR(
    searchValue ? ['/kakao-address-trans-api', searchValue] : null,
    () => fetchAddressTransCoord(searchValue),
    {
      onSuccess: (response) => {
        const [region] = response.data.documents;
        setSearchLocation({
          latitude: region?.y,
          longitude: region?.x,
        });
        router.push('/');
      },
    },
  );

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
