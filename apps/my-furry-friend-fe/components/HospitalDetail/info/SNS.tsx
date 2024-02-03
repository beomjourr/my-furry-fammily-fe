import { Flex } from '@chakra-ui/react';
import InstagramIcon from '@my-furry-family/images/instagram.svg';
import YoutubeIcon from '@my-furry-family/images/youtube.svg';
import FacebookIcon from '@my-furry-family/images/facebook.svg';
import BlogIcon from '@my-furry-family/images/blog.svg';
import { Url, UrlType } from '../../../service/hospitalDetail';
import AccordionWrapper from '../AccodionItemWrapper';
import SnsButton from './button/SNSButton';

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
                <SnsButton key={item.title} item={item} url={url} />
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
