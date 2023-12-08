import React from 'react';
import { useAtom } from 'jotai/index';
import { debounce } from 'lodash';
import { SearchInput } from '@my-furry-family/next-ui-component';
import { searchKeyword } from '../../store/search';

function SearchHeaderInput() {
  const [, setKeyword] = useAtom(searchKeyword);
  const [isLoading, setIsLoading] = React.useState(false);

  const debounceValue = debounce((value, option) => {
    setKeyword(value);
    setIsLoading(option.loading);
  }, 1000);

  const handleChangeInput = (value: string) => {
    setIsLoading(true);
    debounceValue(value, { loading: false });
  };

  return (
    <div className="w-full mr-[16px] ml-[10px]">
      <SearchInput
        onChange={(e) => {
          handleChangeInput(e.target.value);
        }}
        placeholder="병원명으로 검색해보세요."
        isLoading={isLoading}
      />
    </div>
  );
}

export default SearchHeaderInput;
