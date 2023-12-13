import React, { useState } from 'react';
import { useAtom } from 'jotai/index';
import { SearchInput } from '@my-furry-family/next-ui-component';
import { searchKeyword } from '../../store/search';

function SearchHeaderInput() {
  const [inputValue, setInputValue] = useState('');
  const [, setKeyword] = useAtom(searchKeyword);

  const handleChangeInput = (value: string) => {
    setInputValue(value);
  };

  const handleClickInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setKeyword(inputValue);
    }
  };

  return (
    <div className="w-full mr-[16px] ml-[10px]">
      <SearchInput
        enterKeyHint="search"
        onKeyPress={handleClickInput}
        onChange={(e) => {
          handleChangeInput(e.target.value);
        }}
        placeholder="병원명으로 검색해보세요."
      />
    </div>
  );
}

export default SearchHeaderInput;
