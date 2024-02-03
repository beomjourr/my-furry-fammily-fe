import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import fileBlank from '@my-furry-family/images/blank.svg';
import Image from 'next/image';
import { HospitalResponse } from '../../service/search';

interface SearchCardProps {
  data: HospitalResponse;
}

function SearchCard({ data }: SearchCardProps) {
  const router = useRouter();

  const handleSearchCardBox = (hospitalData: HospitalResponse) => {
    if (!hospitalData?.id) return;
    router.push(`/detail/${hospitalData.id}`);
  };

  return (
    <Box
      padding="16px 20px"
      display="flex"
      justifyContent="space-between"
      onClick={() => {
        handleSearchCardBox(data);
      }}
    >
      <Box marginRight="16px">
        <Image
          width={98}
          height={98}
          style={{ objectFit: 'cover', borderRadius: '16px' }}
          // TODO: 백단 이미지 경로 수정되면 주석 해제
          // src={data.thumbnail_image || fileBlank}
          src={fileBlank}
          alt="thumbnail_image"
        />
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
      >
        <Text fontSize="16px" fontWeight={600} marginBottom="2px">
          {data.name}
        </Text>
        <Text fontSize="14px" fontWeight={400} marginBottom="2px">
          {data.street_address}
        </Text>
      </Box>
    </Box>
  );
}

export default SearchCard;
