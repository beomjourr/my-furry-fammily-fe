import React, { CSSProperties, ReactNode } from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react';
import { BADRESP } from 'dns';

interface AccordionItemWrapperProps {
  title: string;
  children: ReactNode; // ReactNode를 사용하여 React 컴포넌트, 문자열, 숫자, null 등을 포함할 수 있도록 함
  panelStyle?: CSSProperties;
  essential?: boolean;
  single?: boolean;
}

function AccordionWrapper({
  title,
  children,
  panelStyle,
  essential,
  single,
}: AccordionItemWrapperProps) {
  let badge: React.ReactNode;

  if (essential) {
    badge = (
      <span
        style={{
          margin: ' 8px',
          background: '#E6E9F9',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2px 8px',
          color: '#6282DB',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        필수
      </span>
    );
  } else if (single) {
    badge = (
      <span
        style={{
          margin: '0px 8px',
          background: '#6282DB',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2px 8px',
          color: 'white',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        단독
      </span>
    );
  } else {
    badge = null;
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
        {' '}
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default AccordionWrapper;
