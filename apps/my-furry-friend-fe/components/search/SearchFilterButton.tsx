import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Badge, Button } from '@chakra-ui/react';
import styles from '../../app/search/page.module.scss';

interface SearchFilterButtonProps {
  filter: { key: string; value: string };
  onFilterClick: (filter: { key: string; value: string }) => void;
  badgeCount: number;
  filterValue: { key: string; value: string }[];
}

function SearchFilterButton({
  filter,
  onFilterClick,
  badgeCount,
  filterValue,
}: SearchFilterButtonProps) {
  const hasFilterValue = filterValue && filterValue.length > 0;

  return (
    <Button
      className={styles.search_filter_button}
      border={hasFilterValue ? '1px solid #6282DB' : '1px solid #E3E3E8'}
      backgroundColor={hasFilterValue ? '#E6E9F9' : '#ffffff'}
      color={hasFilterValue ? '#6282DB' : '#545459'}
      rightIcon={<ChevronDownIcon w="22px" h="22px" color="#9A9AA1" />}
      onClick={() => onFilterClick(filter)}
    >
      {hasFilterValue ? (
        <span>{filterValue[0].value}</span>
      ) : (
        <span>{filter.value}</span>
      )}

      {badgeCount > 0 && (
        <Badge className={styles.search_filter_badge}>{badgeCount}</Badge>
      )}
    </Button>
  );
}

export default SearchFilterButton;
