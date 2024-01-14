import { Accordion, AccordionPanel } from '@chakra-ui/react';
import AccordionWrapper from '../AccodionItemWrapper';
import styles from './panels.module.scss';
import Line from '../Divider';

interface PriceItemProp {
  title: string;
  price: string;
}

function PriceItem({ title, price }: PriceItemProp) {
  return (
    <>
      <div style={{ padding: '16px 0' }}>
        <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 500 }}>
          {title}
        </div>
        <div
          style={{
            textAlign: 'right',
            color: '#004DC8',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {price}
        </div>
      </div>
    </>
  );
}

function Price() {
  return (
    <>
      <Accordion
        allowMultiple
        style={{
          margin: '-16px 0 0',
        }}
      >
        <AccordionWrapper
          title="병원소개"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <PriceItem title="초진 진찰료" price="6600원" />
          <PriceItem title="재진 진찰료" price="7900원" />
          <PriceItem title="상담료 진찰료" price="7900원 ~ 13000원" />
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="예방접종비"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          1
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="검사비"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title=" 중성화 수술 (여자)"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="중성화 수술 (남자)"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="스케일링"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="슬개골 탈구 (한쪽)"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="슬개골 탈구 (양쪽)"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          1
        </AccordionWrapper>
        <Line />
        <AccordionWrapper
          title="건강검진"
          panelStyle={{
            background: '#F9F9F9',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionWrapper>
      </Accordion>
    </>
  );
}
export default Price;
