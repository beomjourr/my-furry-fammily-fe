import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import {
  search,
  searchDisplayMapState,
  searchKeyword,
  searchRecentFocusState,
  selectedFilters,
} from '../store/search';

export default function useResetAtoms() {
  const resetSearch = useResetAtom(search);
  const resetSearchKeyword = useResetAtom(searchKeyword);
  const resetSelectedFilters = useResetAtom(selectedFilters);
  const resetSearchRecentFocusState = useResetAtom(searchRecentFocusState);
  const resetSearchDisplayMapState = useResetAtom(searchDisplayMapState);

  useEffect(() => {
    resetSearch();
    resetSearchKeyword();
    resetSelectedFilters();
    resetSearchRecentFocusState();
    resetSearchDisplayMapState();
  }, [
    resetSearch,
    resetSearchDisplayMapState,
    resetSearchKeyword,
    resetSearchRecentFocusState,
    resetSelectedFilters,
  ]);
}
