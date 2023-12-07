import React from 'react';
import { useAtom } from 'jotai/index';
import { SearchInput } from '@my-furry-family/next-ui-component';
import { searchKeyword } from '../../store/search';
import { useDebounce } from '../../hooks/useDebounce';

function SearchHeaderInput() {
  const [, setKeyword] = useAtom(searchKeyword);
  const debounce = useDebounce((value: string) => {
    setKeyword(value);
  }, 1000);
  const handleChangeInput = (value: string) => {
    debounce(value);
  };

  return (
    <div className="w-full mr-[16px] ml-[10px]">
      <SearchInput
        onChange={(e) => {
          handleChangeInput(e.target.value);
        }}
        placeholder="병원명으로 검색해보세요."
      />
    </div>
  );
}

export default SearchHeaderInput;
