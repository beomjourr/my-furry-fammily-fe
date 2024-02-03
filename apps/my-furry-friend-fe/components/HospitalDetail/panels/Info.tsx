import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import star from '@my-furry-family/images/star.svg';
import starGray from '@my-furry-family/images/star_gray.svg';
import PhoneIcon from '@my-furry-family/images/phone.svg';
import HomepageIcon from '@my-furry-family/images/homepage.svg';
import ReviewIcon from '@my-furry-family/images/review.svg';
import HeartIcon from '@my-furry-family/images/heart.svg';
import clock from '@my-furry-family/images/clock.svg';
import map from '@my-furry-family/images/map_pin_gray.svg';
import InstagramIcon from '@my-furry-family/images/instagram.svg';
import YoutubeIcon from '@my-furry-family/images/youtube.svg';
import FacebookIcon from '@my-furry-family/images/facebook.svg';
import BlogIcon from '@my-furry-family/images/blog.svg';
import arrow from '@my-furry-family/images/arrow_right.svg';
import fileBlank from '@my-furry-family/images/blank.svg';
import Image from 'next/image';
import { KakaoMap } from '@my-furry-family/next-ui-component';
import { Marker } from '../../Marker/Marker';
import Line from '../Divider';
import AccordionWrapper from '../AccodionItemWrapper';
import { HospitalResponseData, UrlType } from '../../../service/hospitalDetail';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

const tagStyle = {
  background: 'white',
  padding: '6px 8px',
  width: 'fit-content',
  borderRadius: 4,
  color: '#545459',
  fontSize: '12px',
  fontWeight: '600',
  marginRight: '8px',
  border: '1px solid #E3E3E8',
};

const activeTagStyle = {
  ...tagStyle,
  background: '#6282DB',
  color: 'white',
  border: 'none',
};

const MENU = [
  { src: PhoneIcon, title: '전화하기', disabled: false },
  { src: HomepageIcon, title: '홈페이지', disabled: false },
  { src: ReviewIcon, title: '리뷰작성', disabled: true },
  { src: HeartIcon, title: '찜하기', disabled: true },
];

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

const INFO = {
  rating: 4.5,
  review: 0,
  operatingHour: '화 10:30 - 19:00',
  homepage: '',
};

interface InfoProps {
  data?: HospitalResponseData;
}

function Info({ data }: InfoProps) {
  const addresstextRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  const handleMenuButton = (
    item: { src: any; title: string },
    apiData?: HospitalResponseData,
  ) => {
    if (!item) return;

    switch (item.title) {
      case '전화하기':
        break;
      case '홈페이지':
        if (apiData?.url?.homepage_url) {
          try {
            window.open(apiData?.url?.homepage_url);
          } catch (e) {
            console.log(e);
          }
        }
        break;
      default:
    }
  };

  if (!data) {
    return null;
  }

  return (
    <>
      {data.images.length > 0 ? (
        <Swiper className="mySwiper" pagination modules={[Pagination]}>
          {data.images.map((imageItem, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    background: '#E3E3E8',
                    width: 'calc(100% + 32px)',
                    height: '240px',
                  }}
                >
                  <Image src={imageItem.uploaded_url} alt="main image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Image
          src={fileBlank}
          style={{ width: '100%', height: '240px', background: '#F9F9F9' }}
          alt="file_blank"
        />
      )}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gap="10px"
        alignSelf="stretch"
        padding="16px 16px 0"
      >
        <Flex>
          {data.is_cooperation && (
            <Badge
              sx={activeTagStyle}
              colorScheme="badge"
              backgroundColor="#6282DB"
            >
              내새꾸 추천 병원
            </Badge>
          )}
          {data.has_mri && <Badge sx={tagStyle}>MRI 보유</Badge>}
          {data.has_ct && <Badge sx={tagStyle}>CT 촬영가능</Badge>}
        </Flex>
        <Text
          fontSize="18px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="normal"
        >
          {data.name}
        </Text>
        <Flex gap="4px" alignItems="center">
          <Image src={INFO.rating ? star : starGray} alt="star" />
          <Text color="#323236" fontSize="14px" fontWeight="500">
            {data.review_rating || '별점 정보 없음'}
          </Text>
          <Text color="#BCBCC4" margin="0 4px">
            |
          </Text>
          <Text color="#545459" fontSize="14px" fontWeight="500">
            {`리뷰 ${data.number_of_reviews || 0}개`}
          </Text>
        </Flex>
      </Flex>
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
                handleMenuButton(item, data);
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

      <Accordion defaultIndex={[1, 2, 3, 4]} allowMultiple padding="0 16px">
        <AccordionItem
          background="#F5F5F7"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          gap="12px"
          padding="16px"
          border="none"
          borderRadius="8px"
          margin="0 0 16px 0"
        >
          <AccordionButton
            borderRadius="10px"
            padding="0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
            _hover={{ background: 'none' }}
          >
            <Flex
              as="span"
              flex="1"
              textAlign="left"
              gap="10px"
              fontSize="14px"
              fontWeight="500"
            >
              <Image src={clock} alt="clock" />
              <span style={{ color: '#6282DB', fontSize: 14 }}>
                {data.operating_times?.now_operation_status}
              </span>
              <span style={{ fontWeight: 500 }}>
                {`${
                  data.operating_times?.today_operating_time?.day_of_week || ''
                }
                  ${
                    data.operating_times?.today_operating_time?.start_time || ''
                  } - ${
                    data.operating_times?.today_operating_time?.end_time || ''
                  }
                `}
              </span>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel padding="0">
            {data.operating_times?.resting_time && (
              <Box
                display="flex"
                padding="6px 8px"
                justifyContent="center"
                alignItems="center"
                gap="4px"
                color="#6282DB"
                background="#E6E9F9"
                fontSize="14px"
                fontWeight="500"
              >
                {`휴게시간 ${
                  data.operating_times?.resting_time?.start_time || ''
                } - ${data.operating_times?.resting_time?.end_time || ''}`}
              </Box>
            )}
            <UnorderedList
              m="1"
              listStyleType="none"
              mt="10px"
              spacing={1}
              fontSize={14}
              fontWeight={500}
              color="#545459"
            >
              {data.operating_times?.operating_times?.map((item, index) => {
                return (
                  <ListItem key={index}>
                    {`${item?.day_of_week || ''} ${item?.start_time || ''} - ${
                      item?.end_time || ''
                    }`}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <Line />
        <AccordionWrapper title="전문과목">
          <Flex
            color="#9A9AA1"
            fontSize="14px"
            alignItems="center"
            justifyContent="flex-start"
            fontWeight="600"
            gap="16px"
            alignSelf="stretch"
            flexWrap="wrap"
            padding="16px"
          >
            {data.categories?.length > 0
              ? data.categories.map((item, index) => {
                  return (
                    <Badge key={index} sx={tagStyle}>
                      {item}
                    </Badge>
                  );
                })
              : '전문과목 정보가 없습니다.'}
          </Flex>
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="병원소개"
          panelStyle={{
            background: '#F5F5F7',
            padding: '16px',
            color: '#323236',
            fontSize: '14px',
            fontWeight: 300,
          }}
        >
          <Text
            fontSize="14px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="150%"
          >
            {data.info_description}
          </Text>
        </AccordionWrapper>

        <Line />

        <AccordionWrapper title="병원위치">
          <Box height={240} borderRadius={10}>
            <KakaoMap
              appKey={APP_KEY}
              center={{
                lng: data.location?.longitude,
                lat: data.location?.latitude,
              }}
            >
              <Marker
                isActive
                isCooperation={false}
                position={{
                  lng: data.location?.longitude,
                  lat: data.location?.latitude,
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
                {data.location?.street_address}
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

        <Line />

        <AccordionWrapper title="SNS" panelStyle={{ margin: '0 -16px' }}>
          {data.url?.instagram_url ||
          data.url?.youtube_url ||
          data.url?.facebook_url ||
          data.url?.blog_url ? (
            <Flex
              padding="20px 25px"
              color="#9A9AA1"
              justifyContent="center"
              alignItems="center"
              alignSelf="stretch"
              gap="10px"
            >
              {SNS.map((item) => {
                if (data.url[item.apiData]) {
                  return (
                    <Button
                      key={item.title}
                      onClick={() => window.open(data.url[item.apiData])}
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
                  );
                }
                return null;
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
      </Accordion>

      <Line />

      <Flex
        padding="16px 25px"
        background="#F5F5F7"
        border="1px solid #E6E9F9"
        borderRadius="4px"
        margin="16px"
      >
        <Box flex="1">
          <Text color="#3467D4" fontSize="14px" fontWeight="600">
            최근 이 병원에 방문하신 적이 있으신가요?
          </Text>
          <Text color="#545459" fontSize="12px" fontWeight="500">
            변경된 정보가 있다면 저희 팀에게 알려주세요!
          </Text>
        </Box>
        <Image src={arrow} alt="arrow" />
      </Flex>
    </>
  );
}
export default Info;
