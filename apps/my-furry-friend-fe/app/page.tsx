'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './page.module.scss';
import LocationButton from '../components/main/LocationButton/LocationButton';
import RequestLocationModal from '../components/main/RequestLocationModal/RequestLocationModal';
import { HomeTab } from '../components/home/HomeTab';
import useResetAtoms from '../hooks/useResetAtoms';
import { HomeFooter } from '../components/home/HomeFooter';

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useResetAtoms();
  // const { location } = useLocation();

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    // if (permission) {
    //   requestLocation();
    //   return;
    // }
    setIsOpen(true);
  };

  const handleModalConfirm = () => {
    // setSearchLocation(undefined);
    // requestLocation();
    handleModalClose();
  };

  const handleAddress = () => {
    handleModalClose();
    router.push(`/address`);
  };

  const handleSearch = () => {
    router.push(`/search`);
  };

  return (
    <div className={styles.container}>
      <LocationButton onClick={handleModalOpen} />
      <Button
        height="48px"
        borderRadius="10px"
        backgroundColor="#F5F5F7"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        leftIcon={<SearchIcon color="#9A9AA1" />}
        onClick={handleSearch}
        className={styles['search-container']}
      >
        <p className={styles.search_text}>
          상세 필터를 적용하여 검색할 수 있어요.
        </p>
      </Button>
      <HomeTab />
      <HomeFooter />
      <RequestLocationModal
        isOpen={isOpen}
        onClose={handleModalClose}
        onClickConfirm={handleAddress}
        onClickCancel={handleModalConfirm}
      />
    </div>
  );
}
