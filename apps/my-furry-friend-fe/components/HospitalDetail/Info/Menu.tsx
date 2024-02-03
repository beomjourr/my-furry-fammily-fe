import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import PhoneIcon from '@my-furry-family/images/phone.svg';
import HomepageIcon from '@my-furry-family/images/homepage.svg';
import ReviewIcon from '@my-furry-family/images/review.svg';
import HeartIcon from '@my-furry-family/images/heart.svg';

const MENU = [
  { src: PhoneIcon, title: '전화하기', disabled: false },
  { src: HomepageIcon, title: '홈페이지', disabled: false },
  { src: ReviewIcon, title: '리뷰작성', disabled: true },
  { src: HeartIcon, title: '찜하기', disabled: true },
];

interface MenuProps {
  homepage_url: string;
  tell: string;
}

export default function Menu({ homepage_url, tell }: MenuProps) {
  const handleMenuButton = (item: { src: any; title: string }) => {
    if (!item) return;

    switch (item.title) {
      case '전화하기':
        if (tell) {
          document.location.href = `tel:${tell}`;
        }
        break;
      case '홈페이지':
        if (homepage_url) {
          window.open(homepage_url, '_blank');
        }
        break;
      default:
    }
  };

  return (
    <Flex m="26px 0 20px">
      {MENU.map((item) => (
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
              handleMenuButton(item);
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
            <Image src={item.src} alt="phone" />
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
