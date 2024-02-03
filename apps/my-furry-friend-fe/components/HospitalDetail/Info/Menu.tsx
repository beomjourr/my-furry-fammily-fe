import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import PhoneIcon from '@my-furry-family/images/phone.svg';
import HomepageIcon from '@my-furry-family/images/homepage.svg';
import HomepageDisabledIcon from '@my-furry-family/images/hompage-disabled.svg';
import ReviewIcon from '@my-furry-family/images/review.svg';
import HeartIcon from '@my-furry-family/images/heart.svg';

interface MenuProps {
  homepage_url: string;
  tell: string;
}

const MENU = ({ homepage_url, tell }: MenuProps) => [
  {
    icon: PhoneIcon,
    disabledIcon: PhoneIcon,
    title: '전화하기',
    disabled: !tell,
  },
  {
    icon: HomepageIcon,
    disabledIcon: HomepageDisabledIcon,
    title: '홈페이지',
    disabled: !homepage_url,
  },
  {
    icon: ReviewIcon,
    disabledIcon: ReviewIcon,
    title: '리뷰작성',
    disabled: true,
  },
  { icon: HeartIcon, disabledIcon: HeartIcon, title: '찜하기', disabled: true },
];

export default function Menu({ homepage_url, tell }: MenuProps) {
  const handleMenuButton = (title: string) => {
    switch (title) {
      case '전화하기':
        if (tell) {
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
      default:
    }
  };

  return (
    <Flex m="26px 0 20px">
      {MENU({ homepage_url, tell }).map((item) => (
        <Flex
          key={item.title}
          flex="1"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            role="button"
            onClick={() => {
              handleMenuButton(item.title);
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
            <Image
              src={item.disabled ? item.disabledIcon : item.icon}
              alt="phone"
            />
            <Text
              fontSize="14px"
              fontWeight="500"
              color={item.disabled ? '#E3E3E8' : '#000000'}
            >
              {item.title}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
