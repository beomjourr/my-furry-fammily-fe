'use client';

import React, { useEffect, useState } from 'react';
import { SearchInput } from '@my-furry-family/next-ui-component';

interface SearchHeaderInputProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  setSearchRecentFocus?: (searchRecentFocus: boolean) => void;
}

function SearchHeaderInput({
  keyword,
  setKeyword,
  setSearchRecentFocus,
}: SearchHeaderInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (value: string) => {
    setInputValue(value);
  };

  const handleClickInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeyword(inputValue);
      setSearchRecentFocus?.(false);
    }
  };

  useEffect(() => {
    if (keyword) {
      setInputValue(keyword);
    }
  }, [keyword]);

  return (
    <div className="w-full mr-[16px] ml-[10px]">
      <SearchInput
        enterKeyHint="search"
        onKeyDown={handleClickInput}
        value={inputValue}
        onChange={(e) => {
          handleChangeInput(e.target.value);
        }}
        onClick={() => {
          setSearchRecentFocus?.(true);
        }}
        onFocus={() => {
          setSearchRecentFocus?.(true);
        }}
        placeholder="병원명으로 검색해보세요."
      />
    </div>
  );
}

export default SearchHeaderInput;
