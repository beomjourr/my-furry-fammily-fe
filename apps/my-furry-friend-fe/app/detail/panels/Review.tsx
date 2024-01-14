import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import star from '@my-furry-family/images/star.svg';

function Review() {
  return (
    <>
      <Box>
        <div>영수증 리뷰를 남겨주세요</div>
        <div>영수증 리뷰 작성</div>
      </Box>
      <Box>
        <div>
          <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
            <Image src={star} alt="star" />
            <div>4.5</div>
          </div>
          <div>최신 20개 리뷰에 대한 정보가 제공됩니다</div>
        </div>
        <Box>
          <Box>
            <div>visitor</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </div>
            <div>2024.01.01 </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Review;
