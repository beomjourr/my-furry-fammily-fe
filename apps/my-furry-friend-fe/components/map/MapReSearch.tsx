import Image from 'next/image';
import RedoIcon from '@my-furry-family/images/redo.svg';
import { Card, Text } from '@chakra-ui/react';
import React from 'react';
import { HospitalResponse } from '../../service/search';

interface MapReSearchProps {
  selectHospital?: HospitalResponse;
  setIsRequest?: (isRequest: boolean) => void;
}

export default function MapReSearch({
  selectHospital,
  setIsRequest,
}: MapReSearchProps) {
  return (
    <Card
      className="rounded-[16px] py-[6px] px-[12px] bg-white absolute left-[50%]"
      bottom={selectHospital ? '210px' : '0'}
      transform="translate(-50%, 0%)"
      zIndex={999}
    >
      <button
        className="flex items-center justify-center gap-[6px]"
        type="button"
        onClick={() => setIsRequest?.(true)}
      >
        <Image src={RedoIcon} width={18} height={18} alt="redo" />
        <Text className="text-[14px] text-[#3467D4]">현 지도에서 검색</Text>
      </button>
    </Card>
  );
}
