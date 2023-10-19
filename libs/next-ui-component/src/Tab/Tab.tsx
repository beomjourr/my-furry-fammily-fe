'use client';
import React, { useState } from 'react';
import styles from './Tab.module.scss';
import { TabItem } from './TabItem';

interface TabProps {
  e?: React.MouseEvent<HTMLButtonElement>;
  menu: string[];
  onChange?: (index: number) => void;
}

export function Tab({ e, menu, onChange }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onChange) {
      onChange(tabIndex);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {menu.map((item: string, index: number) => (
          <TabItem
            isActive={activeTab === index}
            onClick={(e) => {
              handleTabClick(index);
              e.preventDefault();
            }}
          >
            {item}
          </TabItem>
        ))}
      </div>
      <div className={styles.barcontainer}></div>
    </>
  );
}
