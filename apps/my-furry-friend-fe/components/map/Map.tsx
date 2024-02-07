'use client';

import React, { useState } from 'react';
import { Box, Button, Card, Text } from '@chakra-ui/react';
import { KakaoMap } from '@my-furry-family/next-ui-component';
import fileBlank from '@my-furry-family/images/blank.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RedoIcon from '@my-furry-family/images/redo.svg';
import { Marker } from '../Marker/Marker';
import { HospitalResponse } from '../../service/search';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

interface MapProps {
  hospitalData?: HospitalResponse[];
  setLocation?: (position: { lat: number; lng: number }) => void;
  searchLocation?: { latitude: number; longitude: number };
  boundsLocation?: { lat: number; lng: number }[];
  setIsRequest?: (isRequest: boolean) => void;
}

function Map({
  hospitalData,
  setLocation,
  boundsLocation,
  searchLocation,
  setIsRequest,
}: MapProps) {
  const router = useRouter();
  const [active, setActive] = useState<HospitalResponse | undefined>(undefined);
  const [isDragEnd, setIsDragEnd] = useState(false);

  return (
    <div className="relative w-full overflow-hidden flex-1">
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
          </Text>
        </Box>
      </Card>

      <div className="absolute w-full bottom-[16px] left-0 flex items-center justify-center">
        {isDragEnd && (
          <Card
            className="rounded-[16px] py-[6px] px-[12px] bg-white absolute left-[50%]"
            bottom={active ? '210px' : '0'}
            transform="translate(-50%, 0%)"
            zIndex={999}
          >
            <button
              className="flex items-center justify-center gap-[6px]"
              type="button"
              onClick={() => setIsRequest?.(true)}
            >
              <Image src={RedoIcon} width={18} height={18} alt="redo" />
              <Text className="text-[14px] text-[#3467D4]">
                현 지도에서 검색
              </Text>
            </button>
          </Card>
        )}
        {active && (
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
                  src={active.thumbnail_image || fileBlank}
                  alt="thumbnail_image"
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text fontSize="16px" fontWeight={600} marginBottom="2px">
                  {active.name}
                </Text>
                <Text fontSize="14px" fontWeight={400} marginBottom="2px">
                  {active.street_address}
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
              onClick={() => router.push(`/detail/${active.id}`)}
            >
              자세히 보러가기
            </Button>
          </Card>
        )}
      </div>

      <KakaoMap
        appKey={APP_KEY}
        onClick={() => setActive(undefined)}
        center={{
          lng: searchLocation?.longitude || 127.028307900881,
          lat: searchLocation?.latitude || 37.4981646510326,
        }}
        setPosition={setLocation}
        boundsLocation={boundsLocation}
        setIsRequest={setIsRequest}
        setIsDragEnd={setIsDragEnd}
      >
        {hospitalData?.map((item) => (
          <Marker
            key={item.id}
            isCooperation={item.is_cooperation}
            isActive={active?.id === item.id}
            position={{
              lng: item.longitude,
              lat: item.latitude,
            }}
            onClick={() => setActive(item)}
          />
        ))}
        {searchLocation && (
          <Marker
            position={{
              lng: searchLocation.longitude,
              lat: searchLocation.latitude,
            }}
          />
        )}
      </KakaoMap>
    </div>
  );
}

export default Map;
