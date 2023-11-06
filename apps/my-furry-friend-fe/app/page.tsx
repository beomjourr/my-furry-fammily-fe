'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import LocationButton from '../components/main/LocationButton/LocationButton';
import RequestLocationModal from '../components/main/RequestLocationModal/RequestLocationModal';
import useLocation from '../hooks/useLocation';

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
    <div className={styles.main_container}>
      <LocationButton onClick={handleModalOpen} location={location} />
      <main />
      <RequestLocationModal
        isOpen={isOpen}
        onClose={handleModalClose}
        onClickConfirm={handleModalConfirm}
      />
    </div>
  );
}
