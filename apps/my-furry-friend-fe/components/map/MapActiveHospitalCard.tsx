import { Box, Button, Card, Text } from '@chakra-ui/react';
import Image from 'next/image';
import fileBlank from '@my-furry-family/images/blank.svg';
import React from 'react';
import { useRouter } from 'next/navigation';
import { HospitalResponse } from '../../service/search';

interface MapActiveHospitalCardProps {
  selectHospital: HospitalResponse;
}

export default function MapActiveHospitalCard({
  selectHospital,
}: MapActiveHospitalCardProps) {
  const router = useRouter();

  return (
    <Card
      height="194px"
      className="w-[95%]"
      padding="16px"
      zIndex={999}
      rounded={16}
    >
      <Box display="flex">
        <Box
          position="relative"
          maxWidth="100px"
          minWidth="100px"
          height="100px"
          marginRight="16px"
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
            }}
            width={100}
            height={100}
            src={selectHospital.thumbnail_image || fileBlank}
            alt="thumbnail_image"
          />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="16px" fontWeight={600} marginBottom="2px">
            {selectHospital.name}
          </Text>
          <Text fontSize="14px" fontWeight={400} marginBottom="2px">
            {selectHospital.street_address}
          </Text>
        </Box>
      </Box>
      <Button
        colorScheme="brand"
        backgroundColor="brand.300"
        marginTop="16px"
        variant="solid"
        rounded={100}
        onClick={() => router.push(`/detail/${selectHospital.id}`)}
      >
        자세히 보러가기
      </Button>
    </Card>
  );
}
