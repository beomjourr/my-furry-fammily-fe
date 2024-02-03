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

const TAB = ['병원소개', '진료비', '후기'];

export function DetailTab({ id }: { id: string }) {
  const router = useRouter();
  const { data: hospitalData } = useSWR(
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
      <Tabs width="100%" borderColor="gray.300" fontSize="16px" isFitted isLazy>
        <TabList>
          {TAB.map((tab, index) => (
            <Tab
              key={index}
              _selected={{ borderColor: '#6282DB', fontWeight: '600' }}
              padding="16px"
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel padding="0">
            <Info {...hospitalData?.data} />
          </TabPanel>
          <TabPanel>
            <Price {...hospitalData?.data} />
          </TabPanel>
          <TabPanel>
            <Review
              id={id}
              review_rating={hospitalData?.data.data.review_rating}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
