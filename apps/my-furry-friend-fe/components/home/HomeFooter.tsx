import { Flex, Box, Image, Text } from '@chakra-ui/react';
import termsOfUseIcon from '@my-furry-family/images/terms_of_use.svg';
import dividerIcon from '@my-furry-family/images/divider.svg';
import myFurryFriendIcon from '@my-furry-family/images/my_furry_friend.svg';
import * as urlConstants from '../../constants/url';

export function HomeFooter() {
  return (
    <Box
      position="fixed"
      width="100%"
      height="120px"
      padding="20px 16px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="8px"
      bottom="0"
      background="var(--Gray-Scale-Gray300, #F5F5F7)"
    >
      <Flex alignItems="center" gap="2.353px">
        <Image src={termsOfUseIcon.src} alt="" />
        <Image src={myFurryFriendIcon.src} alt="" />
      </Flex>
      <Flex alignItems="center" gap="8px">
        <Flex
          // width="60px"
          height="28px"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: 'LINKING_OPEN_URL',
                url: urlConstants.INTRODUCTION_MY_FURRY_FRITEND_URL,
              }),
            );
          }}
        >
          <Text
            color="var(--Gray-Scale-Gray600, #9A9AA1)"
            fontFamily="Pretendard"
            fontSize="10px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            내새꾸 소개
          </Text>
        </Flex>
        <Image src={dividerIcon.src} alt="" />
        <Flex
          // width="60px"
          height="28px"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: 'LINKING_OPEN_URL',
                url: urlConstants.TERMS_OF_USE_URL,
              }),
            );
          }}
        >
          <Text
            color="var(--Gray-Scale-Gray600, #9A9AA1)"
            fontFamily="Pretendard"
            fontSize="10px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            서비스 이용약관
          </Text>
        </Flex>
        <Image src={dividerIcon.src} alt="" />
        <Flex
          // width="60px"
          height="28px"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: 'LINKING_OPEN_URL',
                url: urlConstants.PRIVACY_POLICY_URL,
              }),
            );
          }}
        >
          <Text
            color="var(--Gray-Scale-Gray600, #9A9AA1)"
            fontFamily="Pretendard"
            fontSize="10px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            개인정보처리방침
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
