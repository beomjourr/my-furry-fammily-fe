import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import star from '@my-furry-family/images/star_review.svg';
import './review.module.scss';

function ReviewItem() {
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </div>
      <div style={{ color: '#BCBCC4', fontSize: '10px', fontWeight: 500 }}>
        2024.01.01{' '}
      </div>
    </Box>
  );
}

function Review() {
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
              네이버 후기{' '}
            </div>
            <div
              style={{
                display: 'flex',
                gap: '7px',
                justifyContent: 'center',
              }}
            >
              <Image src={star} alt="star" width={18} height={18} />
              <div style={{ fontSize: '14px', fontWeight: 400 }}>4.0</div>
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
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </Box>
    </>
  );
}
export default Review;
