'use client';

import { Button, ButtonGroup } from '@chakra-ui/react';
import Image from 'next/image';
import ListIcon from '@my-furry-family/images/list.svg';
import MapIcon from '@my-furry-family/images/map.svg';
import React from 'react';
import { useAtom } from 'jotai';
import SearchFilterButton from './SearchFilterButton';
import styles from '../../app/search/page.module.scss';
import {
  search,
  searchDisplayMapState,
  selectedFilters,
} from '../../store/search';
import SearchModal from './SearchModal';

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

export default function SearchFilterButtonGroup() {
  const [searchFilter] = useAtom(search);
  const [selectedFilter, setSelectedFilter] = useAtom(selectedFilters);
  const [displayMap, setDisplayMap] = useAtom(searchDisplayMapState);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleFilterClick = (filter: { key: string; value: string }) => {
    setSelectedFilter(filter);
    setIsOpen(true);
  };

  return (
    <>
      <ButtonGroup className={styles.filter_button_group}>
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
        <Button
          className={styles.filter_button_icon}
          onClick={() => setDisplayMap(!displayMap)}
        >
          <Image
            src={displayMap ? ListIcon : MapIcon}
            width={20}
            height={20}
            alt="icon"
          />
        </Button>
      </ButtonGroup>

      <SearchModal
        isOpen={isOpen}
        onClose={handleModalClose}
        selectedFilter={selectedFilter}
      />
    </>
  );
}
