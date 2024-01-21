'use client';

import { useRouter } from 'next/navigation';
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { searchHospitalDeatilInfo } from '../../service/hospitalDetail';
import Info from './panels/Info';
import Review from './panels/Review';
import Price from './panels/Price';
import styles from './page.module.scss';
import { Header } from '../../components/Header/Header';

export function DetailTab() {
  const router = useRouter();
  const { data: hospitalData } = useSWR(
    ['/animal-hospitals'],
    (key) => searchHospitalDeatilInfo(1),
    {
      errorRetryCount: 0,
    },
  );

  return (
    <>
      <Header
        isBack
        className={styles.header}
        onBackClick={() => router.back()}
      >
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Text fontWeight={600}>{hospitalData?.data?.data?.name}</Text>
        </Flex>
      </Header>
      <Tabs width="100%" isFitted borderColor="gray.300" fontSize="16px">
        <TabList>
          <Tab
            _selected={{ borderColor: '#6282DB', fontWeight: '600' }}
            padding="16px"
          >
            병원소개
          </Tab>
          <Tab
            _selected={{ borderColor: '#6282DB', fontWeight: '600' }}
            padding="16px"
          >
            진료비
          </Tab>
          <Tab
            _selected={{ borderColor: '#6282DB', fontWeight: '600' }}
            padding="16px"
          >
            후기
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="0">
            <Info {...hospitalData?.data} />
          </TabPanel>
          <TabPanel padding="0">
            <Price {...hospitalData?.data} />
          </TabPanel>
          <TabPanel padding="0">
            <Review />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
