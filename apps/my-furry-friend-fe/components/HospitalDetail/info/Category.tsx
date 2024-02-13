import { Badge, Flex } from '@chakra-ui/react';
import AccordionWrapper from '../AccodionItemWrapper';

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

interface CategoryProps {
  categories: string[];
}

export default function Category({ categories }: CategoryProps) {
  return (
    <AccordionWrapper title="전문과목">
      <Flex
        color="#9A9AA1"
        fontSize="14px"
        alignItems="center"
        justifyContent="flex-start"
        fontWeight="600"
        alignSelf="stretch"
        flexWrap="wrap"
        paddingY="16px"
      >
        {categories.length > 0
          ? categories.map((item, index) => {
              return (
                <Badge key={index} sx={tagStyle}>
                  {item}
                </Badge>
              );
            })
          : '전문과목 정보가 없습니다.'}
      </Flex>
    </AccordionWrapper>
  );
}
