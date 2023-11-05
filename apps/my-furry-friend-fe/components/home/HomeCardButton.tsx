/* eslint-disable react/no-array-index-key */

'use client';

import Support24Icon from '@my-furry-family/images/card/24-support.svg';
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
    badgeText: '반경 5km 이내',
    buttonContent: '내 주변\n동물병원 찾기',
    iconPath: MapPinSelectedIcon,
  },
  {
    badgeText: '서울시 전체 병원',
    buttonContent: '서울시 내에\n위치한 동물병원',
    iconPath: ListIcon,
  },
];

const tab2CardMetaData = [
  {
    buttonContent: '전체보기',
    iconPath: MedicalIcon,
  },
  {
    buttonContent: '고양이 친화',
    iconPath: HospitalIcon,
  },
  {
    buttonContent: '안과',
    iconPath: EyeIcon,
  },
  {
    buttonContent: '정형외과',
    iconPath: BoneImg,
  },
  {
    buttonContent: '치과',
    iconPath: ToothImg,
  },
];

const tab3CardMetaData = [
  {
    badgeText: '동네병원',
    buttonContent: '1차 동물병원',
    iconPath: Support24Icon,
  },
  {
    badgeText: '동네병원보다 큰 병원',
    buttonContent: '2차 동물병원',
    iconPath: Support24Icon,
  },
  {
    badgeText: '대학병원',
    buttonContent: '3차 동물병원',
    iconPath: Support24Icon,
  },
  {
    badgeText: '언제든 열려있는',
    buttonContent: '24시간 병원',
    iconPath: Support24Icon,
  },
];

export function HomeCardButton({
  tab = '지역별',
}: HomeCardButtonProps): React.ReactNode {
  let homeCardButtons: React.ReactNode[] = [];

  if (tab === '지역별') {
    homeCardButtons = tab1CardMetaData.map((data, index) => {
      return (
        <LargeCardButton
          key={index}
          badgeText={data.badgeText}
          badgeColor={badgeColors[index % badgeColors.length]}
          buttonContent={data.buttonContent}
          iconPath={data.iconPath.src}
          onClick={() => {}}
        />
      );
    });
  }
  if (tab === '진료별') {
    homeCardButtons = tab2CardMetaData.map((data, index) => {
      return (
        <SmallCardButton
          key={index}
          buttonContent={data.buttonContent}
          iconPath={data.iconPath.src}
          onClick={() => {}}
        />
      );
    });
  }
  if (tab === '규모별') {
    homeCardButtons = tab3CardMetaData.map((data, index) => {
      return (
        <LargeCardButton
          key={index}
          badgeText={data.badgeText}
          badgeColor={badgeColors[index % badgeColors.length]}
          buttonContent={data.buttonContent}
          iconPath={data.iconPath.src}
          onClick={() => {}}
        />
      );
    });
  }

  return <div className={styles.container}>{homeCardButtons}</div>;
}
