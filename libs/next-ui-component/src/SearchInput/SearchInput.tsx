import { useState } from 'react';
import { Input, InputGroup, InputLeftElement, Image } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './SearchInput.module.scss';

export interface SerachInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({ placeholder, onChange }: SerachInputProps) {
  const [value, setValue] = useState('');

  return (
    <InputGroup className={styles.inputgroup}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </InputGroup>
  );
}
