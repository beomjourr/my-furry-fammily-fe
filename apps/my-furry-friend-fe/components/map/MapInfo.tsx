import { Box, Card, Text } from '@chakra-ui/react';
import React from 'react';

export default function MapInfo() {
  return (
    <Card
      backgroundColor="white"
      position="absolute"
      top="12px"
      left="12px"
      padding="12px"
      zIndex={999}
    >
      <Box display="flex" alignItems="center" marginBottom="3px">
        <Box bgColor="brand.800" rounded="full" width="10px" height="10px" />
        <Text marginLeft="5px" fontSize="12px">
          내새꾸 추천병원
        </Text>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="3px">
        <Box bgColor="brand.400" rounded="full" width="10px" height="10px" />
        <Text
          marginLeft="5px"
          fontSize="12px"
          display="flex"
          alignItems="center"
        >
          진료비 공개병원
        </Text>
      </Box>
    </Card>
  );
}
