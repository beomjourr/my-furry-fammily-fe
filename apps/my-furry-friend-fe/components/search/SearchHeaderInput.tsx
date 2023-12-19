import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai/index';
import { SearchInput } from '@my-furry-family/next-ui-component';
import { searchKeyword, searchRecentFocusState } from '../../store/search';

function SearchHeaderInput() {
  const [, setSearchRecentFocus] = useAtom(searchRecentFocusState);
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useAtom(searchKeyword);

  const handleChangeInput = (value: string) => {
    setInputValue(value);
  };

  const handleClickInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeyword(inputValue);
      setSearchRecentFocus(false);
      e.currentTarget.blur();
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
        onFocus={() => {
          setSearchRecentFocus(true);
        }}
        placeholder="병원명으로 검색해보세요."
      />
    </div>
  );
}

export default SearchHeaderInput;
