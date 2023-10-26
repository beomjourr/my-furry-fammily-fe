'use client';

import {
  CardRadioButton,
  RadioButtonGroup,
  Textarea,
} from '@my-furry-family/next-ui-component';
import { useMemo } from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import useSWRMutation from 'swr/mutation';
import { Button } from '@chakra-ui/react';
import { saveSurvey } from '../../../service/survey';
import {
  SurveyData,
  surveyCurrentPageIndex,
  surveyData,
} from '../../../store/survey';
import styles from './SurveyContainer.module.scss';
import { SurveyTitle } from '../SurveyTitle/SurveyTitle';

const formMeta = [
  {
    key: 'dogOrCat',
    title: '우리 내새꾸는 \n강아지인가요? 고양이인가요?',
    description: '고양이는 추후 업데이트 하겠습니다.',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="dog">강아지</CardRadioButton>
          <CardRadioButton value="cat" disabled>
            고양이
          </CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'species',
    title: '우리 내새꾸의 종을 알려주세요.',
    description: '다른 종은 추후 업데이트 됩니다.',
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={classNames(styles['radio-buttons'], styles.wrap)}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="포메라니안">포메라니안</CardRadioButton>
          <CardRadioButton value="비숑프리제">비숑프리제</CardRadioButton>
          <CardRadioButton value="말티즈">말티즈</CardRadioButton>
          <CardRadioButton value="웰시코기">웰시코기</CardRadioButton>
          <CardRadioButton value="푸들">푸들</CardRadioButton>
          <CardRadioButton value="보더콜리">보더콜리</CardRadioButton>
          <CardRadioButton value="닥스훈트">닥스훈트</CardRadioButton>
          <CardRadioButton value="치와와">치와와</CardRadioButton>
          <CardRadioButton value="프렌치불독">프렌치불독</CardRadioButton>
          <CardRadioButton value="시츄">시츄</CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'gender',
    title: '내새꾸의 성별은 무엇인가요?',
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="male">남아</CardRadioButton>
          <CardRadioButton value="female">여아</CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'isNeutering',
    title: '우리 내새꾸는 중성화 수술을 받았나요?',
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="true">네 받았어요.</CardRadioButton>
          <CardRadioButton value="false">받지 않았어요.</CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'birth',
    title: '우리 내새꾸의 생년월일을 알려주세요.',
    description: '정확하지 않은 경우에는 대략적으로 입력해주세요!',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return <div>todo 생년월일</div>;
    },
  },
  {
    key: 'weight',
    title: '우리 내새꾸의 \n몸무게는 어떻게 되나요?',
    description: '소수점 첫째자리까지 입력해주세요!',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return <div>todo 생년월일</div>;
    },
  },
  {
    key: 'howLong',
    title: '우리 내새꾸가 가족이 된 지\n얼마나 되었나요?',
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="1">6개월 이하</CardRadioButton>
          <CardRadioButton value="2">7개월 ~ 12개월</CardRadioButton>
          <CardRadioButton value="3">12개월 초과</CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'feed',
    title: '우리 내새꾸가 선호하는\n사료를 알려주세요.',
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="1">건식 사료</CardRadioButton>
          <CardRadioButton value="2">습식 사료</CardRadioButton>
          <CardRadioButton value="3">둘 다 잘먹어요!</CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'disease',
    title: '우리 내새꾸가 앓고 있거나\n최근까지 아팠던 질병이 있나요?',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={classNames(styles['radio-buttons'], styles.wrap)}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="1">없음</CardRadioButton>
          <CardRadioButton value="2">관절</CardRadioButton>
          <CardRadioButton value="3">피부</CardRadioButton>
          <CardRadioButton value="4">소화</CardRadioButton>
          <CardRadioButton className={styles['width-full']} value="5">
            기타
          </CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'allergy',
    title: '알러지가 있다면 알려주세요.',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return <div>todo 알러지</div>;
    },
  },
  {
    key: 'bodyType',
    title: '내새꾸 체형은?',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <RadioButtonGroup
          className={styles['radio-buttons']}
          value={currentValue ?? ''}
          onClick={(e) => handleCardClick(e.currentTarget.value)}
        >
          <CardRadioButton value="1">없음</CardRadioButton>
          <CardRadioButton value="2">관절</CardRadioButton>
          <CardRadioButton value="3">피부</CardRadioButton>
          <CardRadioButton value="4">소화</CardRadioButton>
          <CardRadioButton value="5">기타</CardRadioButton>
        </RadioButtonGroup>
      );
    },
  },
  {
    key: 'requestCurator',
    title: '내새꾸 전담 큐레이터에게 \n요청하고 싶은 사항이 있나요?',
    isExistButton: true,
    render: (
      currentValue: string | null,
      handleCardClick: (value: string) => void,
    ) => {
      return (
        <Textarea
          className={styles.textarea}
          initialValue={currentValue ?? ''}
          onChange={(e) => handleCardClick(e.currentTarget.value)}
        />
      );
    },
  },
];

export function SurveyContainer() {
  const [data, setData] = useAtom(surveyData);
  const [pageIndex, setPageIndex] = useAtom(surveyCurrentPageIndex);
  const { trigger } = useSWRMutation('/pet-infos', saveSurvey);
  const currentValue = useMemo(
    () => data[formMeta[pageIndex].key as keyof SurveyData],
    [data, pageIndex],
  );

  const handleCardClick = (value: string) => {
    setData((previous) => {
      return {
        ...previous,
        [formMeta[pageIndex].key]: value,
      };
    });

    if (!formMeta[pageIndex].isExistButton) {
      setPageIndex(pageIndex + 1);
    }
  };

  const submitSurvey = () => {
    trigger({
      pet_allergy: data.allergy,
      pet_birth_date: data.birth,
      pet_disease: data.disease,
      pet_favorite_maker: data.bodyType,
      pet_neutering: data.isNeutering === 'true',
      pet_shape: data.bodyType,
      pet_species: data.species,
      pet_time_with: data.howLong,
      pet_type: data.dogOrCat,
      pet_weight: parseFloat(data.weight ?? '0'),
      request_text: data.requestCurator,
    });
  };

  return (
    <div className={styles.container}>
      <SurveyTitle description={formMeta[pageIndex].description}>
        {formMeta[pageIndex].title}
      </SurveyTitle>
      <div className={styles['form-container']}>
        {formMeta[pageIndex].render?.(currentValue, handleCardClick)}
      </div>
      {formMeta[pageIndex].isExistButton &&
        pageIndex !== formMeta.length - 1 && (
          <Button
            w="328px"
            h="48px"
            rounded="full"
            colorScheme="brand"
            backgroundColor="brand.300"
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            다음
          </Button>
        )}
      {pageIndex === formMeta.length - 1 && (
        <Button
          w="328px"
          h="48px"
          rounded="full"
          colorScheme="brand"
          backgroundColor="brand.300"
          onClick={submitSurvey}
        >
          완료
        </Button>
      )}
    </div>
  );
}
