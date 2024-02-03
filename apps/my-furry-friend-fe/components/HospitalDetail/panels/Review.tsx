'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import './Review.module.scss';
import useSWR from 'swr';
import star from '@my-furry-family/images/star.svg';
import starGray from '@my-furry-family/images/star_gray.svg';
import { searchHospitalReview } from '../../../service/hospitalDetail';

interface ReviewProps {
  id: string;
  review_rating?: number;
}

interface ReviewItemProps {
  content: string;
  written_at: string;
  number_of_visits: number;
  origin_type: string;
}

function ReviewItem({
  content,
  written_at,
  number_of_visits,
  origin_type,
}: ReviewItemProps) {
  return (
    <Box
      style={{
        marginTop: '13px',
        padding: '22px 20px',
        background: 'white',
        flexDirection: 'column',
        display: 'inline-flex',
        borderBottom: '1px #E3E3E8 solid',
        gap: '6px',
        width: 'calc(100% + 32px)',
        margin: '0 -16px',
      }}
    >
      <div style={{ color: '#323236', fontSize: '14px' }}>visitor</div>
      <div
        style={{
          color: '#323236',
          fontSize: '12px',
          fontWeight: '300',
          lineHeight: '18px',
        }}
      >
        {content}
      </div>
      <div style={{ color: '#BCBCC4', fontSize: '10px', fontWeight: 500 }}>
        {written_at} {number_of_visits}번째 방문 {origin_type} 리뷰
      </div>
    </Box>
  );
}

function Review({ id, review_rating }: ReviewProps) {
  const { data } = useSWR(
    ['/animal-hospitals', id],
    (key) =>
      searchHospitalReview({
        animalHospitalId: id,
      }),
    {
      errorRetryCount: 2,
    },
  );

  return (
    <>
      <Flex
        bg="#F5F5F7"
        borderRadius="10px"
        flexDirection="column"
        align="center"
        gap="10px"
        padding="26px 0"
      >
        <div style={{ color: '#9A9AA1', fontSize: '14px' }}>
          영수증 리뷰를 남겨주세요
        </div>
        <button
          type="button"
          onClick={() => {}}
          style={{
            fontSize: '14px',
            width: 'fit-content',
            padding: '11px 54px',
            background: '#6282DB',
            color: '#ffffff',
            fontWeight: 600,
            borderRadius: '10px',
            border: 'none', // 추가: 버튼의 기본 테두리 제거
            cursor: 'pointer', // 추가: 마우스 오버시 커서 변경
          }}
        >
          영수증 리뷰 작성
        </button>
      </Flex>
      <Box>
        <div>
          <Flex
            style={{
              gap: '32px',
              marginTop: '50px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'black',
                fontSize: '20px',
                fontWeight: 500,
              }}
            >
              네이버 후기
            </div>
            <div
              style={{
                display: 'flex',
                gap: '7px',
                justifyContent: 'center',
              }}
            >
              <Image
                src={review_rating ? star : starGray}
                width={18}
                height={18}
                alt="star"
              />
              <Text fontSize="14px" fontWeight="400">
                {review_rating || '별점 정보 없음'}
              </Text>
            </div>
          </Flex>
          <div
            style={{
              color: '#BCBCC4',
              fontSize: '14px',
              marginBottom: '13px',
              fontWeight: '400',
            }}
          >
            최신 20개 리뷰에 대한 정보가 제공됩니다
          </div>
        </div>
      </Box>
      <Box>
        {data?.data.data.totalElement === 0 ? (
          <Flex
            style={{
              color: '#9A9AA1',
              fontSize: '14px',
              justifyContent: 'center',
              fontWeight: '600',
              padding: '41px 0',
            }}
          >
            리뷰가 없습니다.
          </Flex>
        ) : (
          <>
            {data?.data.data.content.map(({ id: reviewId, ...content }) => (
              <ReviewItem key={reviewId} {...content} />
            ))}
          </>
        )}
      </Box>
    </>
  );
}
export default Review;
