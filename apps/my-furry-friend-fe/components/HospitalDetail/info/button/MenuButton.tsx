'use client';

import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';
import * as urlConstants from '../../../../constants/url';

interface MenuButtonProps {
  sendWriteReviewGAEvent?: Function;
  sendCallingGAEvent?: Function;
  homepage_url: string;
  tell: string;
  item: {
    icon: string;
    disabledIcon: string;
    title: string;
    disabled: boolean;
  };
}

export default function MenuButton({
  sendWriteReviewGAEvent,
  sendCallingGAEvent,
  homepage_url,
  tell,
  item,
}: MenuButtonProps) {
  const handleMenuButton = (title: string) => {
    switch (title) {
      case '전화하기':
        if (tell) {
          if (sendCallingGAEvent) {
            sendCallingGAEvent();
          }
          window.ReactNativeWebView.postMessage(
            JSON.stringify({
              type: 'CALL_TELL',
              tell,
            }),
          );
        }
        break;
      case '홈페이지':
        if (homepage_url) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({
              type: 'INAPPBROWSER_EVENT',
              url: homepage_url,
            }),
          );
        }
        break;
      case '리뷰작성':
        if (sendWriteReviewGAEvent) {
          sendWriteReviewGAEvent();
        }
        window.open(urlConstants.RECEIPT_REVIEW_FORM_URL);
        break;
      default:
    }
  };

  return (
    <Flex
      role="button"
      onClick={() => {
        if (!item.disabled) {
          handleMenuButton(item.title);
        }
      }}
      display="flex"
      w="82px"
      h="60px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="8px"
      background="none"
    >
      <Image src={item.disabled ? item.disabledIcon : item.icon} alt="phone" />
      <Text
        fontSize="14px"
        fontWeight="500"
        color={item.disabled ? '#E3E3E8' : '#000000'}
      >
        {item.title}
      </Text>
    </Flex>
  );
}
