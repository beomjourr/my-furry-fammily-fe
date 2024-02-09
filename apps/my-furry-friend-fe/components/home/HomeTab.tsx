import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { HomeCardButton } from './HomeCardButton';
import { mainTabState } from '../../store/mainTab';

export function HomeTab() {
  const [mainTab, setMainTab] = useAtom(mainTabState);

  return (
    <Tabs
      defaultIndex={mainTab}
      isLazy
      width="100%"
      isFitted
      borderColor="gray.300"
      fontSize="16px"
      onChange={(index) => setMainTab(index)}
    >
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
          <HomeCardButton keyword="regions" />
        </TabPanel>
        <TabPanel>
          <HomeCardButton keyword="categories" />
        </TabPanel>
        <TabPanel>
          <HomeCardButton keyword="scales" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
