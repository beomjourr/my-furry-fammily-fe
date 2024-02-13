'use client';

import Image from 'next/image';
import { Button, Text } from '@chakra-ui/react';

interface SnsButtonProps {
  item: {
    title: string;
    src: string;
    apiData: string;
  };
  url: {
    [key: string]: string;
  };
}

export default function SnsButton({ item, url }: SnsButtonProps) {
  return (
    <Button
      key={item.title}
      onClick={() =>
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            type: 'LINKING_OPEN_URL',
            url: url[item.apiData],
          }),
        )
      }
      w="70px"
      h="60px"
      gap="8px"
      display="flex"
      flexDirection="column"
      fontWeight="500"
      alignItems="center"
      justifyContent="center"
      background="none"
    >
      <Image width={24} height={25} src={item.src} alt={item.title} />
      <Text fontSize="14px" fontWeight="500" color="#9A9AA1">
        {item.title}
      </Text>
    </Button>
  );
}
