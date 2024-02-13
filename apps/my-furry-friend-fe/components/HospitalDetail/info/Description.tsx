import { Text } from '@chakra-ui/react';
import AccordionWrapper from '../AccodionItemWrapper';

interface DescriptionProps {
  info_description: string;
}

export default function Description({ info_description }: DescriptionProps) {
  if (info_description) {
    return (
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
          whiteSpace="pre-line"
        >
          {info_description}
        </Text>
      </AccordionWrapper>
    )
  }

  return (
    <AccordionWrapper
      title="병원소개"
      panelStyle={{
        padding: '16px',
        color: '#323236',
        fontSize: '14px',
        fontWeight: 300,
      }}
    >
      <Text
        color="#9A9AA1"
        fontSize="14px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="150%"
        whiteSpace="pre-line"
      >
        병원소개가 없습니다.
      </Text>
    </AccordionWrapper>
  )
}
