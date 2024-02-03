import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import arrow from '@my-furry-family/images/arrow_right.svg';

export default function Notice() {
  return (
    <Flex
      padding="16px 25px"
      background="#F5F5F7"
      border="1px solid #E6E9F9"
      borderRadius="4px"
      margin="16px"
    >
      <Box flex="1">
        <Text color="#3467D4" fontSize="14px" fontWeight="600">
          최근 이 병원에 방문하신 적이 있으신가요?
        </Text>
        <Text color="#545459" fontSize="12px" fontWeight="500">
          변경된 정보가 있다면 저희 팀에게 알려주세요!
        </Text>
      </Box>
      <Image src={arrow} alt="arrow" />
    </Flex>
  );
}
