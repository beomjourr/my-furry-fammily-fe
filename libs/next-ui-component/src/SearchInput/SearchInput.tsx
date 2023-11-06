import { useState } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './SearchInput.module.scss';

export interface SerachInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({ placeholder, onChange }: SerachInputProps) {
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <InputGroup w="90%">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
}
