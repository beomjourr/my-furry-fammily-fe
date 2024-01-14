'use client';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Info from './panels/Info';
import Review from './panels/Review';
import Price from './panels/Price';
import './page.module.scss';

export function DetailTab() {
  return (
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
        <TabPanel>
          <Info />
        </TabPanel>
        <TabPanel>
          <Price />
        </TabPanel>
        <TabPanel>
          <Review />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
