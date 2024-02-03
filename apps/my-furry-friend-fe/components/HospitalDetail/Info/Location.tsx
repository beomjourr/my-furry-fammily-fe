import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import { KakaoMap } from '@my-furry-family/next-ui-component';
import Image from 'next/image';
import map from '@my-furry-family/images/map_pin_gray.svg';
import { useRef } from 'react';
import AccordionWrapper from '../AccodionItemWrapper';
import { Marker } from '../../Marker/Marker';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

interface LocationProps {
  location: {
    latitude: number;
    longitude: number;
    street_address: string;
  };
}

export default function Location({ location }: LocationProps) {
  const addresstextRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  return (
    <AccordionWrapper title="병원위치">
      <Box height={240} borderRadius={10}>
        <KakaoMap
          appKey={APP_KEY}
          center={{
            lng: location?.longitude,
            lat: location?.latitude,
          }}
        >
          <Marker
            isActive
            isCooperation={false}
            position={{
              lng: location?.longitude,
              lat: location?.latitude,
            }}
            onClick={() => {}}
          />
        </KakaoMap>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="16px"
        padding="16px 0"
        alignSelf="stretch"
      >
        <Flex flex="1 0 0" alignItems="flex-start" gap="10px">
          <Image src={map} alt="map" />
          <Text
            fontSize="14px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="150%"
            ref={addresstextRef}
          >
            {location?.street_address}
          </Text>
        </Flex>
        <Button
          color="#6282DB"
          fontSize="12px"
          padding="8px 10px"
          fontWeight="600"
          borderRadius="4px"
          background="#E6E9F9"
          onClick={() => {
            if (addresstextRef.current) {
              const text = addresstextRef.current.textContent; // Get the text content from the element
              navigator.clipboard
                .writeText(text || '')
                .then(() => {
                  toast({
                    title: '클립보드에 복사되었습니다.',
                    duration: 3000,
                    variant: 'toast',
                  });
                })
                .catch((err) => {
                  console.error('Failed to copy text: ', err);
                });
            }
          }}
        >
          주소 복사
        </Button>
      </Flex>
    </AccordionWrapper>
  );
}
