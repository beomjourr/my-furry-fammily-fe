import { atomWithReset, atomWithStorage } from 'jotai/utils';

export interface Search {
  [key: string]: { key: string; value: string }[];
}

export const search = atomWithReset<Search>({
  regions: [],
  categories: [],
  scales: [],
});

export const searchKeyword = atomWithReset<string>('');

export const selectedFilters = atomWithReset<{
  key: string;
  value: string;
}>({
  key: '',
  value: '',
});

export const searchRecentFocusState = atomWithReset<boolean>(false);

export const searchDisplayMapState = atomWithReset<boolean>(false);

export const searchRecentStorage = atomWithStorage<string[]>(
  'search-recent',
  [],
);
