import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { HospitalResponseData } from '../../service/hospitalDetail';
import Info from './panels/Info';
import Review from './panels/Review';
import Price from './panels/Price';
import { Header } from '../Header/Header';
import styles from '../../app/detail/[id]/page.module.scss';
import { sendGAEvent } from 'apps/my-furry-friend-fe/utils/ga';

const TAB = ['병원소개', '진료비', '후기'];

export function DetailTab({
  id,
  hospitalData,
}: {
  id: string;
  hospitalData?: HospitalResponseData;
}) {
  const tabsRef = useRef<HTMLDivElement>(null);

  const sendWriteReviewGAEvent = () => {
    sendGAEvent('write_review', {
      recommendation: hospitalData?.is_cooperation || '정보없음',
      hospital_name: hospitalData?.name || '정보없음',
    });
  }

  const sendCallingGAEvent = () => {
    sendGAEvent('calling', {
      recommendation: hospitalData?.is_cooperation || '정보없음',
      hospital_name: hospitalData?.name || '정보없음',
    });
  }
  
  const sendCollectionGAEvent = () => {
    sendGAEvent('collection', {
      recommendation: hospitalData?.is_cooperation || '정보없음',
      hospital_name: hospitalData?.name || '정보없음',
    });
  }


  return (
    <Tabs
      ref={tabsRef}
      position="relative"
      width="100%"
      borderColor="gray.300"
      fontSize="16px"
      lazyBehavior="keepMounted"
      isFitted
      isLazy
      onChange={(index) => {
        tabsRef.current?.scrollIntoView();
      }}
    >
      <div className={styles.tab_list}>
        <Header isBack className={styles.header}>
          <div className={styles.header_title}>
            <Text fontWeight={600}>{hospitalData?.name}</Text>
          </div>
        </Header>

        <TabList>
          {TAB.map((tab, index) => (
            <Tab
              key={index}
              borderColor="#F5F5F7"
              _selected={{ borderColor: '#6282DB', fontWeight: '600' }}
              padding="16px"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </div>

      <TabPanels>
        <TabPanel padding="0">
          <Info data={hospitalData} sendWriteReviewGAEvent={sendWriteReviewGAEvent} sendCallingGAEvent={sendCallingGAEvent} sendCollectionGAEvent={sendCollectionGAEvent} />
        </TabPanel>
        <TabPanel>
          <Price data={hospitalData} sendCollectionGAEvent={sendCollectionGAEvent} />
        </TabPanel>
        <TabPanel>
          <Review id={id} review_rating={hospitalData?.review_rating} sendWriteReviewGAEvent={sendWriteReviewGAEvent} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
