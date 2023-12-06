import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Image, Text, useToast } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import useSWRImmutable from 'swr/immutable';
import { useAtom } from 'jotai/index';
import { KakaoMap } from '@my-furry-family/next-ui-component';
import styles from '../../app/search/result/page.module.scss';
import { searchHospital } from '../../service/search';
import { search } from '../../store/search';
import { Marker } from '../Marker/Marker';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

function Map() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [active, setActive] = useState<number | undefined>(undefined);
  const toast = useToast();
  const [searchFilter] = useAtom(search);
  const { data, isLoading } = useSWRImmutable(
    `/animal-hospitals/search`,
    (key) => searchHospital(key, { name: keyword, ...searchFilter }),
    {
      errorRetryCount: 3,
    },
  );

  console.log('data', data);

  useEffect(() => {
    toast({
      title: '반경 5km 내로 표시됩니다.',
      duration: 5000,
      variant: 'toast',
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex-1">
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
          <Box bgColor="brand.800" rounded="full" width="10px" height="10px" />
          <Text marginLeft="5px" fontSize="12px">
            내새꾸 협력병원
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
            <span className={styles.gray}>(2인 이상)</span>
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box bgColor="brand.200" rounded="full" width="10px" height="10px" />
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
            <Box display="flex" flexDirection="column" justifyContent="center">
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
        {data?.data?.data?.map((item) => (
          <Marker
            key={item.id}
            isActive={active === item.id}
            position={{
              lng: item.longitude,
              lat: item.latitude,
            }}
            onClick={() => setActive(item.id)}
          />
        ))}
      </KakaoMap>
    </div>
  );
}

export default Map;
