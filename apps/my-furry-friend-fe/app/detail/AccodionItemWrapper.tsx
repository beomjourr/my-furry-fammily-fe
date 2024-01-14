import React, { CSSProperties, ReactNode } from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
} from '@chakra-ui/react';

interface AccordionItemWrapperProps {
  title: string;
  children: ReactNode; // ReactNode를 사용하여 React 컴포넌트, 문자열, 숫자, null 등을 포함할 수 있도록 함
  panelStyle?: CSSProperties;
}

function AccordionWrapper({
  title,
  children,
  panelStyle,
}: AccordionItemWrapperProps) {
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
            fontSize="16px"
            fontWeight={600}
          >
            {title}
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
