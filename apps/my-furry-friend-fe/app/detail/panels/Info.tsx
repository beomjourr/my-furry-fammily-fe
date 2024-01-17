import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  ListItem,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import star from '@my-furry-family/images/star.svg';
import starGray from '@my-furry-family/images/star_gray.svg';
import phone from '@my-furry-family/images/phone.svg';
import home from '@my-furry-family/images/home.svg';
import review from '@my-furry-family/images/review.svg';
import heart from '@my-furry-family/images/heart.svg';
import clock from '@my-furry-family/images/clock.svg';
import map from '@my-furry-family/images/map_pin_gray.svg';
import instagram from '@my-furry-family/images/instagram.svg';
import youtube from '@my-furry-family/images/youtube.svg';
import facebook from '@my-furry-family/images/facebook.svg';
import blog from '@my-furry-family/images/blog.svg';
import arrow from '@my-furry-family/images/arrow_right.svg';
import Image from 'next/image';
import { KakaoMap } from '@my-furry-family/next-ui-component';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Marker } from '../../../components/Marker/Marker';
import AccordionWrapper from '../AccodionItemWrapper';

import Line from '../Divider';

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '';

const TAGS = ['내새꾸 추천병원', 'MRI 보유', 'CT 촬영가능'];
const SUBJECTS = ['안과'];

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
  { src: phone, title: '전화하기' },
  { src: home, title: '홈페이지' },
  { src: review, title: '리뷰작성' },
  { src: heart, title: '찜하기' },
];
const SNS = [
  { src: instagram, title: '인스타그램' },
  { src: youtube, title: '유튜브' },
  { src: facebook, title: '페이스북' },
  { src: blog, title: '블로그' },
];
const INFO = {
  rating: 4.5,
  review: 0,
  operatingHour: '화 10:30 - 19:00',
  homepage: '',
};

function Info({ data }: any) {
  const addresstextRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  return (
    <>
      <div
        style={{
          background: '#E3E3E8',
          width: 'calc(100% + 32px)',
          margin: '-16px -16px 20px',
          height: '240px',
        }}
      >
        이미지
      </div>
      <div>
        {data?.is_cooperation && (
          <span style={activeTagStyle}>내새꾸 추천병원</span>
        )}
        {data?.has_mri && <span style={tagStyle}>MRI 보유</span>}
        {data?.has_ct && <span style={tagStyle}>CT 촬영가능</span>}
      </div>
      <Box m="10px 0">
        <div style={{ fontWeight: 600, fontSize: '18px' }}>{data?.name}</div>
        <Flex
          style={{
            gap: '4px',
            marginTop: '6px',
            alignItems: 'center',
          }}
        >
          <Image src={INFO.rating ? star : starGray} alt="star" />
          <div
            style={{
              color: '#323236',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            {INFO.rating ? INFO.rating : '별점 정보 없음'}
          </div>
          <div style={{ color: '#BCBCC4', margin: '0 8px' }}>|</div>
          <div
            style={{ color: '#545459', fontSize: '14px', fontWeight: '500' }}
          >
            {INFO.review ? INFO.review : '리뷰 0개'}
          </div>
        </Flex>
      </Box>
      <Flex m="26px 0 20px">
        {MENU.map((item) => (
          <Flex
            key={item.title}
            flex="1"
            style={{
              flexDirection: 'column',
            }}
          >
            <button
              type="button"
              onClick={() => {}}
              style={{
                gap: '8px',
                flexDirection: 'column',
                color: '#323236',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={item.src} alt="phone" /> {item.title}{' '}
            </button>
          </Flex>
        ))}
      </Flex>

      <Accordion defaultIndex={[0]} allowMultiple>
        {INFO.operatingHour && (
          <AccordionItem
            style={{
              background: '#F5F5F7',
              borderRadius: '10px',
              border: 'none',
              margin: '26px 0px',
              padding: '14px 0px',
            }}
          >
            <h2>
              <AccordionButton
                style={{ borderRadius: '10px' }}
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
                    {data?.now_operation_status}
                  </span>
                  <span style={{ fontWeight: 500 }}>화 10:30 - 19:00</span>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {' '}
              <Box
                style={{
                  borderRadius: '8px',
                  color: '#6282DB',
                  padding: '6px 8px',
                  background: '#E6E9F9',
                  width: 'fit-content',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                {' '}
                휴게시간 13:00 - 14:00
              </Box>
              <UnorderedList
                m="1"
                listStyleType="none"
                mt="10px"
                spacing={1}
                fontSize={14}
                fontWeight={500}
                color="#545459"
              >
                <ListItem>월 10:00 - 19:00</ListItem>
                <ListItem>화 10:00 - 19:00</ListItem>
                <ListItem>수 10:00 - 19:00</ListItem>
                <ListItem>목 10:00 - 19:00</ListItem>
                <ListItem>금 10:00 - 19:00</ListItem>
                <ListItem>토 10:00 - 19:00</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        )}
        <Line />
        <AccordionWrapper title="전문과목">
          {SUBJECTS.length > 1 ? (
            <Flex flexWrap="wrap" padding="16px 0">
              {SUBJECTS.map((subject) => (
                <span
                  key={subject}
                  style={{
                    background: 'white',
                    padding: '6px 8px',
                    width: 'fit-content',
                    borderRadius: 4,
                    color: '#545459',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginRight: '8px',
                    marginBottom: '8px',
                    border: '1px solid #E3E3E8',
                  }}
                >
                  {subject}
                </span>
              ))}
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
              {data?.categories?.length > 0
                ? data?.categories.map((item: string, index: number) => {
                    return (
                      <span key={index} style={tagStyle}>
                        {item}
                      </span>
                    );
                  })
                : '전문과목 정보가 없습니다'}
            </Flex>
          )}
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="병원소개"
          panelStyle={{
            background: '#F5F5F7',
            width: 'calc(100% + 32px)',
            margin: '0 -16px ',
            color: '#323236',
            fontSize: '14px',
            fontWeight: 300,
          }}
        >
          <div style={{ padding: '16px 22px' }}>{data?.info_description}</div>
        </AccordionWrapper>

        <Line />
        <AccordionWrapper title="병원위치">
          <Box
            style={{
              background: '#E3E3E8',
              height: '240px',
              borderRadius: '10px',
            }}
          >
            <KakaoMap
              appKey={APP_KEY}
              center={{
                lng: data?.location?.longitude,
                lat: data?.location?.latitude,
              }}
              // setPosition={setLocation}
            >
              <Marker
                isActive
                isCooperation={false}
                position={{
                  lng: data?.location?.longitude,
                  lat: data?.location?.latitude,
                }}
                onClick={() => {}}
              />
            </KakaoMap>
          </Box>
          <Flex gap="10px" padding="16px 0">
            <Flex
              gap="10px"
              style={{ flex: 1, display: 'flex', alignItems: 'center' }}
            >
              <Image src={map} alt="map" />
              <div ref={addresstextRef}>{data?.location?.street_address}</div>
            </Flex>
            <button
              type="button"
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
              style={{
                color: '#6282DB',
                fontSize: '12px',
                padding: '8px 10px',
                fontWeight: '600',
                borderRadius: '4px',
                background: '#E6E9F9',
              }}
            >
              주소 복사
            </button>
          </Flex>
        </AccordionWrapper>

        <Line />

        <AccordionWrapper title="SNS">
          {SNS.length > 0 ? (
            <Flex padding="20px 25px" color="#9A9AA1" fontSize="14px">
              {SNS.map((item) => (
                <Flex
                  key={item.title}
                  flex="1"
                  style={{
                    flexDirection: 'column',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {}}
                    style={{
                      gap: '8px',
                      flexDirection: 'column',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image src={item.src} alt="instagram" /> {item.title}
                  </button>
                </Flex>
              ))}
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
        margin="20px 0"
      >
        <Box flex="1">
          <div
            style={{
              color: '#3467D4',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            최근 이 병원에 방문하신 적이 있으신가요?
          </div>
          <div style={{ color: '#545459', fontSize: '12px' }}>
            변경된 정보가 있다면 저희 팀에게 알려주세요!
          </div>
        </Box>
        <Image src={arrow} alt="arrow" />
      </Flex>
    </>
  );
}
export default Info;
