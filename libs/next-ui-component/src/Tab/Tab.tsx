'use client';
import React, { useState } from 'react';
import styles from './Tab.module.scss';
import { TabItem } from './TabItem';

interface TabProps {
  e?: React.MouseEvent<HTMLButtonElement>;
}

export function Tab(tabProps: TabProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className={styles.container}>
        <TabItem
          isActive={activeTab === 0}
          onClick={(e) => {
            tabProps.e?.preventDefault(); // optional chaining을 사용하여 e가 undefined일 경우에 대비
            handleTabClick(0);
          }}
        >
          지역별
        </TabItem>
        <TabItem isActive={activeTab === 1} onClick={() => handleTabClick(1)}>
          진료별
        </TabItem>
        <TabItem isActive={activeTab === 2} onClick={() => handleTabClick(2)}>
          규모별
        </TabItem>
      </div>
      <div className={styles.barcontainer}></div>
      {activeTab === 0 && <div>내용0</div>}
      {activeTab === 1 && <div>내용1</div>}
      {activeTab === 2 && <div>내용2</div>}
    </>
  );
}
