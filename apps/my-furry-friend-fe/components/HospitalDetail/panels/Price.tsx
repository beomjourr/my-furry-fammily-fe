import { Accordion, Box } from '@chakra-ui/react';
import { groupBy } from 'lodash';
import { useState } from 'react';
import AccordionWrapper from '../AccodionItemWrapper';
import Line from '../Divider';
import { HospitalResponseData } from '../../../service/hospitalDetail';
import * as urlConstants from '../../../constants/url';
import PreviewImage from '../info/PreviewImage';

interface PriceItemProp {
  title: string;
  price: React.ReactNode;
}

interface PriceProps {
  sendCollectionGAEvent?: () => void;
  data?: HospitalResponseData;
}

function PriceItem({ title, price }: PriceItemProp) {
  return (
    <div style={{ padding: '16px' }}>
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
  );
}

function Price({ sendCollectionGAEvent, data }: PriceProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<{
    image: string[];
    index: number;
  }>({
    image: [],
    index: 0,
  });

  const handlePreviewImage = () => {
    setPreviewImage({
      image: data?.images.sheet_images || [],
      index: 0,
    });
    setIsPreviewOpen(true);
  };

  const hospitalFeesGroupBy = groupBy(
    data?.clinic_fees.sort((a, b) =>
      a.is_required === b.is_required ? 0 : a.is_required ? -1 : 1,
    ),
    'clinic_type_name',
  );

  const handleMoveNewInfoButton = () => {
    if (sendCollectionGAEvent) {
      sendCollectionGAEvent();
    }
    window.open(urlConstants.INFO_UPDATE_REQUEST_FORM_URL);
  };

  return (
    <>
      <Accordion allowMultiple margin="-16px 0 0">
        {Object.values(hospitalFeesGroupBy)?.map(
          (hospitalFee, index: number) => {
            const feesWrapperName = hospitalFee?.[0]?.clinic_type_name;
            const hospitalFeeIsRequired = hospitalFee?.[0]?.is_required;

            return (
              <div key={index}>
                <AccordionWrapper
                  title={feesWrapperName}
                  is_required={hospitalFeeIsRequired}
                  panelStyle={{
                    background: '#F9F9F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {hospitalFee?.map((item: any, index2: number) => {
                    return (
                      <PriceItem
                        title={`${item.animal_weight || ''} ${
                          item.animal_name || ''
                        } ${item.clinic_type_name}`}
                        price={item.cost}
                        key={index2}
                      />
                    );
                  })}
                </AccordionWrapper>
                <Line />
              </div>
            );
          },
        )}
        {data?.images.has_sheet_image && (
          <>
            <AccordionWrapper
              title="건강검진"
              is_required={false}
              panelStyle={{
                background: '#F9F9F9',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <PriceItem
                title="건강검진 항목"
                price={
                  <button
                    type="button"
                    className="underline"
                    onClick={handlePreviewImage}
                  >
                    건강검진 항목표 보기 (click)
                  </button>
                }
              />
            </AccordionWrapper>
            <Line />
          </>
        )}
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
        onClick={() => {
          handleMoveNewInfoButton();
        }}
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
        최신 정보 알려주기
      </button>

      <PreviewImage
        previewImage={previewImage}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
export default Price;
