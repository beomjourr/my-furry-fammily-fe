import { Accordion, AccordionPanel, Box } from '@chakra-ui/react';
import AccordionWrapper from '../AccodionItemWrapper';
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
          single
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
          essential
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
        <Line />
      </Accordion>
      <Box
        bg="#F5F5F7"
        borderRadius="10px"
        gap="10px"
        padding="16px"
        marginTop="14px"
        marginBottom="14px"
        fontWeight="400"
        color="#545459"
        fontSize="14px"
      >
        <div>
          아래 항목은 반려동물의 건강상태, 몸무게, 종, 수술난이도 등 다양한
          이유로 현장의 최신 정보와 차이가 있을 수 있습니다. 현장 정보와
          일치하지 않아 발생한 피해에 대해서는 내새꾸측이 책임을 지거나 보상하지
          않습니다. 정확한 비용은 동물병원에 문의해 주시기 바랍니다.
        </div>
      </Box>
      <button
        type="button"
        onClick={() => {}}
        style={{
          fontSize: '14px',
          width: '100%',
          padding: '15.5px 0',
          background: '#6282DB',
          color: '#ffffff',
          fontWeight: 500,
          borderRadius: '999px',
          border: 'none', // 추가: 버튼의 기본 테두리 제거
          cursor: 'pointer', // 추가: 마우스 오버시 커서 변경
        }}
      >
        영수증 리뷰 작성
      </button>
    </>
  );
}
export default Price;
