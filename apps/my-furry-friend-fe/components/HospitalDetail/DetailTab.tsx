import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { HospitalResponseData } from '../../service/hospitalDetail';
import Info from './panels/Info';
import Review from './panels/Review';
import Price from './panels/Price';
import { Header } from '../Header/Header';
import styles from '../../app/detail/[id]/page.module.scss';

const TAB = ['병원소개', '진료비', '후기'];

export function DetailTab({
  id,
  hospitalData,
}: {
  id: string;
  hospitalData: HospitalResponseData;
}) {
  return (
    <>
      <Tabs
        position="relative"
        width="100%"
        borderColor="gray.300"
        fontSize="16px"
        lazyBehavior="keepMounted"
        isFitted
        isLazy
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
            <Info data={hospitalData} />
          </TabPanel>
          <TabPanel>
            <Price data={hospitalData} />
          </TabPanel>
          <TabPanel>
            <Review id={id} review_rating={hospitalData?.review_rating} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
