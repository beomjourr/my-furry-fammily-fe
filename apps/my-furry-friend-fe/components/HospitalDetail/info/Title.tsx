import { Badge, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import star from '@my-furry-family/images/star.svg';
import starGray from '@my-furry-family/images/star_gray.svg';

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

interface TitleProps {
  is_cooperation: boolean;
  has_mri: boolean;
  has_ct: boolean;
  name: string;
  review_rating: number;
  number_of_reviews: number;
}

export default function Title({
  is_cooperation,
  has_ct,
  has_mri,
  name,
  number_of_reviews,
  review_rating,
}: TitleProps) {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      gap="10px"
      alignSelf="stretch"
      padding="16px 16px 0"
    >
      <Flex>
        {is_cooperation && (
          <Badge
            sx={activeTagStyle}
            colorScheme="badge"
            backgroundColor="#6282DB"
          >
            내새꾸 추천 병원
          </Badge>
        )}
        {has_mri && <Badge sx={tagStyle}>MRI 보유</Badge>}
        {has_ct && <Badge sx={tagStyle}>CT 촬영가능</Badge>}
      </Flex>
      <Text
        fontSize="18px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="normal"
      >
        {name}
      </Text>
      <Flex gap="4px" alignItems="center">
        <Image src={review_rating ? star : starGray} alt="star" />
        <Text color="#323236" fontSize="14px" fontWeight="500">
          {review_rating || '별점 정보 없음'}
        </Text>
        <Text color="#BCBCC4" margin="0 4px">
          |
        </Text>
        <Text color="#545459" fontSize="14px" fontWeight="500">
          {`리뷰 ${number_of_reviews || 0}개`}
        </Text>
      </Flex>
    </Flex>
  );
}
