'use client';

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
import useSWR from 'swr';
import {
  LargeCardButton,
  SmallCardButton,
} from '@my-furry-family/next-ui-component';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai/index';
import { searchHospitalConditions } from '../../service/hospitalDetail';
import styles from './HomeCardButton.module.scss';
import { search, selectedFilters } from '../../store/search';

interface HomeCardButtonProps {
  keyword: 'regions' | 'categories' | 'scales';
}

const regions = [
  {
    key: 'NEAR',
    badgeText: '반경 5km 이내',
    buttonContent: '내 주변\n동물병원 찾기',
    iconPath: MapPinSelectedIcon,
  },
  {
    key: 'SEOUL',
    badgeText: '서울시 전체 병원',
    buttonContent: '서울시 내에\n위치한 동물병원',
    iconPath: ListIcon,
  },
];

const categories = [
  {
    key: 'All',
    value: '전체보기',
    buttonContent: '전체보기',
    iconPath: MedicalIcon,
  },
  {
    key: '1',
    value: '고양이',
    buttonContent: '고양이 친화',
    iconPath: HospitalIcon,
  },
  {
    key: '3',
    value: '안과',
    buttonContent: '안과',
    iconPath: EyeIcon,
  },
  {
    key: '5',
    value: '정형외과',
    buttonContent: '정형외과',
    iconPath: BoneImg,
  },
  {
    key: '2',
    value: '치과',
    buttonContent: '치과',
    iconPath: ToothImg,
  },
];

const scales = [
  {
    key: 'SMALL',
    value: '1차 병원',
    badgeText: '동네병원',
    buttonContent: '1차 동물병원',
    iconPath: Badge1ChaIcon,
  },
  {
    key: 'MEDIUM',
    value: '2차 병원',
    badgeText: '동네병원보다 큰 병원',
    buttonContent: '2차 동물병원',
    iconPath: Badge2ChaIcon,
  },
  {
    key: 'LARGE',
    value: '3차 병원',
    badgeText: '대학병원',
    buttonContent: '3차 동물병원',
    iconPath: Badge3ChaIcon,
  },
  {
    key: 'ALWAYS',
    value: '24시간 병원',
    badgeText: '언제든 열려있는',
    buttonContent: '24시간 병원',
    iconPath: Badge24Icon,
  },
];

const variable: {
  [index: string]: {
    key: string;
    value?: string;
    badgeText?: string;
    buttonContent: string;
    iconPath: any;
  }[];
} = {
  regions,
  categories,
  scales,
};

const keyWordVariable = {
  regions: {
    size: 'large',
    value: '지역',
  },
  categories: {
    size: 'small',
    value: '진료',
  },
  scales: {
    size: 'large',
    value: '규모',
  },
};

const badgeColors = ['orange', 'purple', 'pink', 'blue'];

export function HomeCardButton({ keyword = 'regions' }: HomeCardButtonProps) {
  const router = useRouter();
  const [, setSearchFilter] = useAtom(search);
  const [, setSelectedFilter] = useAtom(selectedFilters);

  const ButtonComponent =
    keyWordVariable[keyword].size === 'small'
      ? SmallCardButton
      : LargeCardButton;

  const { data } = useSWR(
    `/animal-hospitals/search-conditions`,
    searchHospitalConditions,
  );

  const handleButtonClick = (item: { key: string; value?: string }) => {
    router.push('/search');
    setSelectedFilter({
      key: keyword,
      value: keyWordVariable[keyword].value,
    });

    if (item.key === 'All' || item.key === 'SEOUL') {
      return setSearchFilter((prev) => ({
        ...prev,
        [keyword]: data?.data.data[keyword] || [],
      }));
    }

    return setSearchFilter((prev) => ({
      ...prev,
      [keyword]: [{ key: item.key, value: item.value || '' }],
    }));
  };

  return (
    <div className={styles.container}>
      {variable[keyword].map((item, index) => (
        <ButtonComponent
          key={index}
          badgeText={item.badgeText}
          badgeColor={badgeColors[index % badgeColors.length]}
          iconPath={item.iconPath.src}
          buttonContent={item.buttonContent}
          onClick={() => {
            if (keyword === 'regions') {
              if (item.key === 'NEAR') {
                router.push('/search/result');
              } else {
                handleButtonClick(item);
              }
            } else {
              handleButtonClick(item);
            }
          }}
        />
      ))}
    </div>
  );
}
