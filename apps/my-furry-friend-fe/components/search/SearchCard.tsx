import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
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
      <Box position="relative" width="98px" height="98px" marginRight="16px">
        <Image
          width={98}
          height={98}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '16px',
            objectFit: 'cover',
          }}
          src={data.thumbnail_image || fileBlank}
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
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="14px" fontWeight={400} marginBottom="2px">
            {data.street_address}
          </Text>
          <Text
            color="#9A9AA1"
            fontSize="12px"
            fontWeight={400}
            marginBottom="2px"
          >
            {data.distance ? `${Math.round(data.distance)}km` : ''}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default SearchCard;
