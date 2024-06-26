import React, { CSSProperties, ReactNode } from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

interface AccordionItemWrapperProps {
  title: string;
  children: ReactNode; // ReactNode를 사용하여 React 컴포넌트, 문자열, 숫자, null 등을 포함할 수 있도록 함
  panelStyle?: CSSProperties;
  clinic_type_category?: string;
}

const badgeStyle = {
  margin: '0px 8px',
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
  fontSize: '12px',
  fontWeight: '400',
};

function AccordionWrapper({
  title,
  children,
  panelStyle,
  clinic_type_category,
}: AccordionItemWrapperProps) {
  let badge: React.ReactNode = null;

  if (typeof clinic_type_category === 'string') {
    if (clinic_type_category === '필수') {
      badge = (
        <span
          style={{
            ...badgeStyle,
            background: '#E6E9F9',
            color: '#6282DB',
          }}
        >
          필수
        </span>
      );
    }
    if (clinic_type_category === '단독') {
      badge = (
        <span
          style={{
            ...badgeStyle,
            background: '#6282DB',
            color: 'white',
          }}
        >
          단독
        </span>
      );
    }
    if (clinic_type_category === '기타') {
      badge = (
        <span
          style={{
            ...badgeStyle,
            background: '#0a0a0a4c',
            color: 'white',
          }}
        >
          기타
        </span>
      );
    }
  }

  return (
    <AccordionItem
      style={{
        border: 'none',
        width: 'calc(100% + 32px)',
        margin: '0 -16px ',
      }}
    >
      <h2>
        <AccordionButton _hover={{ background: 'none' }} pt="16px" pb="16px">
          <Box
            as="span"
            flex="1"
            textAlign="left"
            justifyContent="center"
            fontSize="16px"
            fontWeight={600}
          >
            {title}
            {badge}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel paddingTop="0" paddingBottom="0" style={panelStyle}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default AccordionWrapper;
