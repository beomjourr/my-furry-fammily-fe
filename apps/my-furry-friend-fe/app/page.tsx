'use client';

import { useState } from 'react';
import { SearchInput } from '@my-furry-family/next-ui-component';
import styles from './page.module.scss';
import LocationButton from '../components/main/LocationButton/LocationButton';
import RequestLocationModal from '../components/main/RequestLocationModal/RequestLocationModal';
import useLocation from '../hooks/useLocation';
import { HomeTab } from '../components/home/HomeTab';

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { location, isGranted, requestLocation } = useLocation();

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    if (location || isGranted) {
      requestLocation();
      return;
    }
    setIsOpen(true);
  };

  const handleModalConfirm = () => {
    requestLocation();
    handleModalClose();
  };

  return (
    <div className={styles.container}>
      <LocationButton onClick={handleModalOpen} location={location} />
      <div className={styles['search-container']}>
        <SearchInput placeholder="상세 필터를 적용하여 검색할 수 있어요." />
      </div>
      <HomeTab />
      <RequestLocationModal
        isOpen={isOpen}
        onClose={handleModalClose}
        onClickConfirm={handleModalConfirm}
      />
    </div>
  );
}
