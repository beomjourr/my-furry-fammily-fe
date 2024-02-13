import { Flex } from '@chakra-ui/react';
import PhoneIcon from '@my-furry-family/images/phone.svg';
import HomepageIcon from '@my-furry-family/images/homepage.svg';
import HomepageDisabledIcon from '@my-furry-family/images/hompage-disabled.svg';
import ReviewDisabledIcon from '@my-furry-family/images/review_disabled.svg';
import ReviewIcon from '@my-furry-family/images/review.svg';
import HeartIcon from '@my-furry-family/images/heart.svg';
import MenuButton from './button/MenuButton';

interface MenuProps {
  sendWriteReviewGAEvent?: () => void;
  sendCallingGAEvent?: () => void;
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
    disabledIcon: ReviewDisabledIcon,
    title: '리뷰작성',
    disabled: false,
  },
  { icon: HeartIcon, disabledIcon: HeartIcon, title: '찜하기', disabled: true },
];

export default function Menu({
  sendWriteReviewGAEvent,
  sendCallingGAEvent,
  homepage_url,
  tell,
}: MenuProps) {
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
          <MenuButton
            sendWriteReviewGAEvent={sendWriteReviewGAEvent}
            sendCallingGAEvent={sendCallingGAEvent}
            homepage_url={homepage_url}
            tell={tell}
            item={item}
          />
        </Flex>
      ))}
    </Flex>
  );
}
