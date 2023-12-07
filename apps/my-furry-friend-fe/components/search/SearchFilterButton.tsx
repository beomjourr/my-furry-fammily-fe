import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Badge, Button } from '@chakra-ui/react';

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
      border={hasFilterValue ? '1px solid #6282DB' : '1px solid #E3E3E8'}
      maxHeight="32px"
      borderRadius="16px"
      backgroundColor={hasFilterValue ? '#E6E9F9' : '#ffffff'}
      color={hasFilterValue ? '#6282DB' : '#545459'}
      fontSize="12px"
      padding="9px 12px"
      fontWeight="400"
      position="relative"
      _focus={{
        bg: '#E6E9F9',
        border: '1px solid #6282DB',
        borderColor: '#6282DB',
        color: '#6282DB',
      }}
      rightIcon={<ChevronDownIcon w="22px" h="22px" color="#9A9AA1" />}
      onClick={() => onFilterClick(filter)}
    >
      {hasFilterValue ? (
        <span>{filterValue[0].value}</span>
      ) : (
        <span>{filter.value}</span>
      )}

      {badgeCount > 0 && (
        <Badge
          position="absolute"
          width="18px"
          height="18px"
          rounded="full"
          top="-5px"
          right="-5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#ffffff"
          fontSize="10px"
          backgroundColor="#6282DB"
        >
          {badgeCount}
        </Badge>
      )}
    </Button>
  );
}

export default SearchFilterButton;
