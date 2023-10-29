'use client';

import { KakaoMap } from '@my-furry-family/next-ui-component';
import { Box, Card, Text } from '@chakra-ui/react';
import { Header } from '../../../components/Header/Header';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <Header isBack className={styles.header}>
        {/* Input 추가 예정 */}
      </Header>
      <div className="relative w-full h-full">
        <Card
          height="82px"
          position="absolute"
          top="12px"
          left="12px"
          padding="12px"
        >
          <Box display="flex" alignItems="center" marginBottom="3px">
            <Box
              bgColor="brand.800"
              rounded="full"
              width="10px"
              height="10px"
            />
            <Text marginLeft="5px" fontSize="12px">
              내새꾸 협력병원
            </Text>
          </Box>
          <Box display="flex" alignItems="center" marginBottom="3px">
            <Box
              bgColor="brand.400"
              rounded="full"
              width="10px"
              height="10px"
            />
            <Text
              marginLeft="5px"
              fontSize="12px"
              display="flex"
              alignItems="center"
            >
              진료비 공개병원
              <span className={styles.gray}>(2인 이상)</span>
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              bgColor="brand.200"
              rounded="full"
              width="10px"
              height="10px"
            />
            <Text
              marginLeft="5px"
              fontSize="12px"
              display="flex"
              alignItems="center"
            >
              진료비 비공개병원
              <span className={styles.gray}>(1인)</span>
            </Text>
          </Box>
        </Card>
        <KakaoMap />
      </div>
    </div>
  );
}
