'use client';

import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Image from 'next/image';
import { useAtom } from 'jotai/index';
import MapImage from '@my-furry-family/images/map.svg';
import styles from './page.module.scss';
import SearchModal from '../../components/search/SearchModal';
import Map from '../../components/map/Map';
import SearchList from '../../components/search/SearchList';
import { search } from '../../store/search';
import SearchFilterButton from '../../components/search/SearchFilterButton';

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
  const [searchFilter] = useAtom(search);
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
            <SearchFilterButton
              key={filter.key}
              filter={filter}
              onFilterClick={handleFilterClick}
              badgeCount={searchFilter[filter.key].length}
              filterValue={searchFilter[filter.key]}
            />
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

      {displayMap ? <Map /> : <SearchList />}

      <SearchModal
        isOpen={isOpen}
        onClose={handleModalClose}
        selectedFilter={selectedFilter}
      />
    </div>
  );
}

export default Page;
