import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchInputProps extends InputProps {
  isLoading?: boolean;
}

export function SearchInput({ isLoading, ...rest }: SearchInputProps) {
  return (
    <InputGroup
      borderRadius="10px"
      backgroundColor="#F5F5F7"
      border="none"
      outline="none"
      size="lg"
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="#9A9AA1" />
      </InputLeftElement>
      <Input
        fontSize="14px"
        fontWeight="400"
        border="none"
        color="#9A9AA1"
        {...rest}
      />
      {isLoading && (
        <InputRightElement>
          <Spinner color="#9A9AA1" />
        </InputRightElement>
      )}
    </InputGroup>
  );
}
