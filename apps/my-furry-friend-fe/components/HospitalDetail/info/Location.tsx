import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import map from '@my-furry-family/images/map_pin_gray.svg';
import AccordionWrapper from '../AccodionItemWrapper';
import LocationButton from './button/LocationButton';
import LocationMap from './button/LocationMap';

interface LocationProps {
  location: {
    latitude: number;
    longitude: number;
    street_address: string;
  };
}

export default function Location({ location }: LocationProps) {
  return (
    <AccordionWrapper title="병원위치">
      <Box height={240} borderRadius={10}>
        <LocationMap location={location} />
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
          >
            {location?.street_address}
          </Text>
        </Flex>
        <LocationButton street_address={location?.street_address} />
      </Flex>
    </AccordionWrapper>
  );
}
