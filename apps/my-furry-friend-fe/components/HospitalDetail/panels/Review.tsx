import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import './Review.module.scss';
import star from '@my-furry-family/images/star.svg';
import starGray from '@my-furry-family/images/star_gray.svg';
import { useQuery } from '@tanstack/react-query';
import { searchHospitalReview } from '../../../service/hospitalDetail';
import * as urlConstants from '../../../constants/url';

interface ReviewProps {
  id: string;
  review_rating?: number;
}

interface ReviewItemProps {
  content: string;
  written_at: string;
  number_of_visits: number;
  origin_type: string;
  reviewIndex: number;
}

function ReviewItem({
  content,
  written_at,
  number_of_visits,
  origin_type,
  reviewIndex,
}: ReviewItemProps) {
  return (
    <Box
      style={{
        marginTop: '13px',
        padding: '22px 20px',
        flexDirection: 'column',
        display: 'inline-flex',
        borderBottom: '1px #E3E3E8 solid',
        gap: '6px',
        width: 'calc(100% + 32px)',
        margin: '0 -16px',
      }}
    >
      <div style={{ color: '#323236', fontSize: '14px', fontWeight: '600' }}>
        {typeof reviewIndex === 'number' && reviewIndex >= 0
          ? `방문자${reviewIndex + 1}`
          : ''}
      </div>
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
      <div
        style={{
          color: '#BCBCC4',
          fontSize: '10px',
          fontWeight: 500,
        }}
      >
        <span
          style={{
            padding: '4px 6px 4px 0px',
          }}
        >
          {written_at}
        </span>
        <span
          style={{
            padding: '4px 6px',
          }}
        >
          {number_of_visits}번째 방문&nbsp;&nbsp;&nbsp;
        </span>
        <span
          style={{
            padding: '4px 0px 4px 6px',
          }}
        >
          {origin_type} 인증
        </span>
      </div>
    </Box>
  );
}

function Review({ id, review_rating }: ReviewProps) {
  const { data } = useQuery({
    queryKey: ['/reviews', id],
    queryFn: () =>
      searchHospitalReview({
        animalHospitalId: id,
      }),
  });

  const handleGoReviewFormButton = () => {
    window.open(urlConstants.RECEIPT_REVIEW_FORM_URL);
  };

  return (
    <>
      <Flex
        bg="#F5F5F7"
        borderRadius="10px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        align="center"
        gap="10px"
        padding="26px 0"
      >
        <Flex
          fontSize="14px"
          fontWeight="600"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          리뷰 작성자 전원에게 <br />
          카카오페이 1,000원 혜택을 드립니다!
        </Flex>
        <button
          type="button"
          onClick={() => {
            handleGoReviewFormButton();
          }}
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
        <Box>
          <div>
            <Flex
              style={{
                gap: '32px',
                marginTop: '30px',
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
              {data?.data.data.content.map(
                ({ id: reviewId, ...content }, index) => (
                  <ReviewItem key={reviewId} {...content} reviewIndex={index} />
                ),
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
export default Review;
