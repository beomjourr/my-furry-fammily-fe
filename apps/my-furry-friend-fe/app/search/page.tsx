'use client';

import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import MapImage from '@my-furry-family/images/map.svg';
import styles from './page.module.scss';
import SearchModal from '../../components/search/SearchModal';
import Map from '../../components/map/Map';

const filters = [
  {
    key: 'regions',
    value: '지역',
  },
  {
    key: 'categories',
    value: '진료',
  },
  {
    key: 'scales',
    value: '규모',
  },
];

function Page() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [displayMap, setDisplayMap] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState<{
    key: string;
    value: string;
  }>({ key: '', value: '' });

  const handleFilterClick = (filter: { key: string; value: string }) => {
    setSelectedFilter(filter);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <ButtonGroup padding="6px 16px" justifyContent="space-between">
        <div className={styles.filter_button}>
          {filters.map((filter) => (
            <Button
              key={filter.key}
              border="1px solid #E3E3E8"
              maxHeight="32px"
              borderRadius="16px"
              backgroundColor="#ffffff"
              color="#545459"
              fontSize="12px"
              padding="9px 12px"
              fontWeight="400"
              _focus={{
                bg: '#E6E9F9',
                border: '1px solid #6282DB',
                borderColor: '#6282DB',
                color: '#6282DB',
              }}
              rightIcon={<ChevronDownIcon w="22px" h="22px" color="#9A9AA1" />}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.value}
            </Button>
          ))}
        </div>
        <div>
          <Button
            border="1px solid #E3E3E8"
            width="32px"
            height="32px"
            borderRadius="16px"
            backgroundColor="#ffffff"
            padding="0"
            _focus={{
              bg: '#E6E9F9',
              border: '1px solid #6282DB',
              borderColor: '#6282DB',
              color: '#6282DB',
            }}
            onClick={() => setDisplayMap(!displayMap)}
          >
            <Image src={MapImage} width={20} height={20} alt="map" />
          </Button>
        </div>
      </ButtonGroup>

      {displayMap ? <Map /> : <div>리스트</div>}

      <SearchModal
        isOpen={isOpen}
        onClose={handleModalClose}
        selectedFilter={selectedFilter}
      />
    </div>
  );
}

export default Page;
