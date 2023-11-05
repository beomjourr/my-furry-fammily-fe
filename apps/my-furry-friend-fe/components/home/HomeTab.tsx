'use client';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { HomeCardButton } from './HomeCardButton';

export function HomeTab() {
  return (
    <Tabs width="100%" isFitted borderColor="gray.300" fontSize="16px">
      <TabList>
        <Tab
          _selected={{ borderColor: '#9CB6FF', fontWeight: '600' }}
          paddingBottom="11px"
          paddingTop="11px"
        >
          지역별
        </Tab>
        <Tab
          _selected={{ borderColor: '#FFCDE2', fontWeight: '600' }}
          paddingBottom="11px"
          paddingTop="11px"
        >
          진료별
        </Tab>
        <Tab
          _selected={{ borderColor: '#A9E79F', fontWeight: '600' }}
          paddingBottom="11px"
          paddingTop="11px"
        >
          규모별
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <HomeCardButton tab="진료별" />
        </TabPanel>
        <TabPanel>
          <HomeCardButton tab="지역별" />
        </TabPanel>
        <TabPanel>
          <HomeCardButton tab="규모별" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
