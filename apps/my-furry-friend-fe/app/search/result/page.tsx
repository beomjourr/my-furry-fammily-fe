'use client';

import { KakaoMap, SearchInput } from '@my-furry-family/next-ui-component';
import { Box, Button, Card, Image, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useSWRImmutable from 'swr/immutable';
import { Header } from '../../../components/Header/Header';
import { Marker } from '../../../components/Marker/Marker';
import styles from './page.module.scss';
import { searchHospital } from '../../../service/search';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

export default function Index() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const { data, isLoading } = useSWRImmutable(
    `/search-hospital?keyword=${keyword}`,
    searchHospital,
    {
      errorRetryCount: 3,
    },
  );
  const [active, setActive] = useState<string | undefined>(undefined);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    toast({
      title: '반경 5km 내로 표시됩니다.',
      status: 'info',
      duration: 5000,
      colorScheme: 'gray',
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header
        isBack
        className={styles.header}
        onBackClick={() => router.push('/')}
      >
        <div className="w-full mr-[16px] ml-[10px]">
          <SearchInput placeholder="병원명으로 검색해보세요." />
        </div>
      </Header>
      <div className="relative w-full h-full overflow-hidden">
        <Card
          backgroundColor="white"
          height="82px"
          position="absolute"
          top="12px"
          left="12px"
          padding="12px"
          zIndex={999}
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
        {active && (
          <Card
            height="194px"
            width="95%"
            position="absolute"
            bottom="16px"
            left="10px"
            padding="16px"
            zIndex={999}
            rounded={16}
          >
            <Box display="flex">
              <Box marginRight="16px">
                <Image
                  boxSize="100px"
                  style={{ objectFit: 'cover' }}
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  rounded={16}
                />
              </Box>
              <Box
                display="flex"
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
            <Button
              colorScheme="brand"
              backgroundColor="brand.300"
              marginTop="16px"
              variant="solid"
              rounded={100}
            >
              자세히 보러가기
            </Button>
          </Card>
        )}
        <KakaoMap appKey={APP_KEY} onClick={() => setActive(undefined)}>
          <Marker
            id="1"
            type="1"
            isActive={active === '1'}
            position={{ lng: 127.1566638, lat: 35.8374724 }}
            onClick={(id) => setActive(id)}
          />
          <Marker
            id="2"
            type="2"
            isActive={active === '2'}
            position={{ lng: 127.1576638, lat: 35.8374724 }}
            onClick={(id) => setActive(id)}
          />
          <Marker
            id="3"
            type="3"
            isActive={active === '3'}
            position={{ lng: 127.1586638, lat: 35.8374724 }}
            onClick={(id) => setActive(id)}
          />
        </KakaoMap>
      </div>
    </div>
  );
}
