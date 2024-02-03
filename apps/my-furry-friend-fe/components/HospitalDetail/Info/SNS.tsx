import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import InstagramIcon from '@my-furry-family/images/instagram.svg';
import YoutubeIcon from '@my-furry-family/images/youtube.svg';
import FacebookIcon from '@my-furry-family/images/facebook.svg';
import BlogIcon from '@my-furry-family/images/blog.svg';
import { Url, UrlType } from '../../../service/hospitalDetail';
import AccordionWrapper from '../AccodionItemWrapper';

const SNS: {
  src: any;
  title: string;
  apiData: UrlType;
}[] = [
  { src: InstagramIcon, title: '인스타그램', apiData: 'instagram_url' },
  { src: YoutubeIcon, title: '유튜브', apiData: 'youtube_url' },
  { src: FacebookIcon, title: '페이스북', apiData: 'facebook_url' },
  { src: BlogIcon, title: '블로그', apiData: 'blog_url' },
];

interface SnsProps {
  url: Url;
}

export default function Sns({ url }: SnsProps) {
  return (
    <AccordionWrapper title="SNS" panelStyle={{ margin: '0 -16px' }}>
      {url?.instagram_url ||
      url?.youtube_url ||
      url?.facebook_url ||
      url?.blog_url ? (
        <Flex
          padding="20px 25px"
          color="#9A9AA1"
          justifyContent="center"
          alignItems="center"
          alignSelf="stretch"
          gap="10px"
        >
          {SNS.map((item) => {
            return (
              url[item.apiData] && (
                <Button
                  key={item.title}
                  onClick={() => window.open(url[item.apiData])}
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
                  <Image
                    width={24}
                    height={24}
                    src={item.src}
                    alt={item.title}
                  />
                  <Text fontSize="14px" fontWeight="500" color="#9A9AA1">
                    {item.title}
                  </Text>
                </Button>
              )
            );
          })}
        </Flex>
      ) : (
        <Flex
          style={{
            color: '#9A9AA1',
            fontSize: '14px',
            justifyContent: 'center',
            fontWeight: '600',
            padding: '41px 0',
          }}
        >
          SNS 정보가 없습니다.
        </Flex>
      )}
    </AccordionWrapper>
  );
}
