'use client';

import { useRouter } from 'next/navigation';
import {
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
import { Header } from '../Header/Header';
import styles from '../../app/detail/[id]/page.module.scss';

export function DetailTab({ id }: { id: string }) {
  const router = useRouter();
  const { data: hospitalData }: any = useSWR(
    [`/animal-hospitals/${id}`],
    (key) => searchHospitalDeatilInfo(id),
    {
      errorRetryCount: 2,
    },
  );

  return (
    <>
      <Header
        isBack
        className={styles.header}
        onBackClick={() => router.back()}
      >
        <div className={styles.header_title}>
          <Text fontWeight={600}>{hospitalData?.data?.data?.name}</Text>
        </div>
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
          <TabPanel>
            <Price {...hospitalData?.data} />
          </TabPanel>
          <TabPanel>
            <Review />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
