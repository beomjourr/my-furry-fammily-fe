import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export function SearchInput(props: InputProps) {
  return (
    <InputGroup
      borderRadius="10px"
      backgroundColor="#F5F5F7"
      border="none"
      outline="none"
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        fontSize="14px"
        fontWeight="400"
        border="none"
        color="#9A9AA1"
        {...props}
      />
    </InputGroup>
  );
}
