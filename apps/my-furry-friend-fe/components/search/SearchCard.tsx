import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
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
          boxSize="98px"
          style={{ objectFit: 'cover' }}
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          rounded={16}
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
