'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import Badge24Icon from '@my-furry-family/images/card/24-badge.svg';
import Badge1ChaIcon from '@my-furry-family/images/card/1cha-badge.svg';
import Badge2ChaIcon from '@my-furry-family/images/card/2cha-badge.svg';
import Badge3ChaIcon from '@my-furry-family/images/card/3cha-badge.svg';
import BoneImg from '@my-furry-family/images/card/bone.svg';
import EyeIcon from '@my-furry-family/images/card/eye.svg';
import HospitalIcon from '@my-furry-family/images/card/hospital.svg';
import ListIcon from '@my-furry-family/images/card/list.svg';
import MapPinSelectedIcon from '@my-furry-family/images/card/map_pin_selected.svg';
import MedicalIcon from '@my-furry-family/images/card/medical_documentation.svg';
import ToothImg from '@my-furry-family/images/card/tooth.svg';
import {
  LargeCardButton,
  SmallCardButton,
} from '@my-furry-family/next-ui-component';
import styles from './HomeCardButton.module.scss';

interface HomeCardButtonProps {
  tab: '지역별' | '진료별' | '규모별';
}

const badgeColors = ['orange', 'purple', 'pink', 'blue'];

const tab1CardMetaData = [
  {
    key: 'NEAR',
    badgeText: '반경 5km 이내',
    buttonContent: '내 주변\n동물병원 찾기',
    iconPath: MapPinSelectedIcon,
  },
  {
    key: [
      'JUNG',
      'YONGSAN',
      'SEONGDONG',
      'GWANGJIN',
      'DONGDAEMUN',
      'JUNGRANG',
      'SEONGBUK',
      'GANGBUK',
      'DOBONG',
      'NOWON',
      'EUNPYEONG',
      'SEODAEMUN',
      'MAPO',
      'YANGCHEON',
      'GANGSEO',
      'GURO',
      'GEUMCHEON',
      'YEONGDEUNGPO',
      'DONGJAK',
      'GWANAK',
      'SEOCHO',
      'GANGNAM',
      'SONGPA',
      'GANGDONG',
    ],
    badgeText: '서울시 전체 병원',
    buttonContent: '서울시 내에\n위치한 동물병원',
    iconPath: ListIcon,
  },
];

const tab2CardMetaData = [
  {
    key: [1, 2, 3, 4, 5, 6, 7],
    buttonContent: '전체보기',
    iconPath: MedicalIcon,
  },
  {
    key: '1',
    buttonContent: '고양이 친화',
    iconPath: HospitalIcon,
  },
  {
    key: '3',
    buttonContent: '안과',
    iconPath: EyeIcon,
  },
  {
    key: '5',
    buttonContent: '정형외과',
    iconPath: BoneImg,
  },
  {
    key: '2',
    buttonContent: '치과',
    iconPath: ToothImg,
  },
];

const tab3CardMetaData = [
  {
    key: 'SMALL',
    badgeText: '동네병원',
    buttonContent: '1차 동물병원',
    iconPath: Badge1ChaIcon,
  },
  {
    key: 'MEDIUM',
    badgeText: '동네병원보다 큰 병원',
    buttonContent: '2차 동물병원',
    iconPath: Badge2ChaIcon,
  },
  {
    key: 'LARGE',
    badgeText: '대학병원',
    buttonContent: '3차 동물병원',
    iconPath: Badge3ChaIcon,
  },
  {
    key: 'ALWAYS',
    badgeText: '언제든 열려있는',
    buttonContent: '24시간 병원',
    iconPath: Badge24Icon,
  },
];

export function HomeCardButton({
  tab = '지역별',
}: HomeCardButtonProps): React.ReactNode {
  const router = useRouter();

  const homeCardButtons = useMemo((): React.ReactNode => {
    if (tab === '지역별') {
      return (
        <>
          {tab1CardMetaData.map((data, index) => {
            return (
              <LargeCardButton
                key={index}
                badgeText={data.badgeText}
                badgeColor={badgeColors[index % badgeColors.length]}
                buttonContent={data.buttonContent}
                iconPath={data.iconPath.src}
                onClick={() => {
                  if (data.key === 'NEAR') {
                    return router.push('/search/result');
                  }
                  return router.push(`/search/result?region=${data.key}`);
                }}
              />
            );
          })}
        </>
      );
    }
    if (tab === '진료별') {
      return (
        <>
          {tab2CardMetaData.map((data, index) => {
            return (
              <SmallCardButton
                key={index}
                buttonContent={data.buttonContent}
                iconPath={data.iconPath.src}
                onClick={() => {
                  router.push(`/search/result?category=${data.key}`);
                }}
              />
            );
          })}
        </>
      );
    }
    if (tab === '규모별') {
      return (
        <>
          {tab3CardMetaData.map((data, index) => {
            return (
              <LargeCardButton
                key={index}
                badgeText={data.badgeText}
                badgeColor={badgeColors[index % badgeColors.length]}
                buttonContent={data.buttonContent}
                iconPath={data.iconPath.src}
                onClick={() => {
                  router.push(`/search/result?scale=${data.key}`);
                }}
              />
            );
          })}
        </>
      );
    }
    return null;
  }, [router, tab]);

  return <div className={styles.container}>{homeCardButtons}</div>;
}
