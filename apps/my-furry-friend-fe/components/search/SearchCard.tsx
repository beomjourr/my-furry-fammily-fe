import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

function SearchCard() {
  return (
    <Box padding="16px 20px" display="flex" justifyContent="space-between">
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
          리안동물병원
        </Text>
        <Text fontSize="14px" fontWeight={400} marginBottom="2px">
          서울특별시 강남구
        </Text>
        <Text fontSize="12px" fontWeight={400} color="gray.600">
          중성화 · 내과 전문
        </Text>
      </Box>
    </Box>
  );
}

export default SearchCard;
