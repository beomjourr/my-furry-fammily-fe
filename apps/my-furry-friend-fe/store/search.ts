import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface Search {
  [key: string]: { key: string; value: string }[];
}

export const search = atom<Search>({
  regions: [],
  categories: [],
  scales: [],
});

export const selectedFilters = atom<{
  key: string;
  value: string;
}>({
  key: '',
  value: '',
});

export const searchRecentStorage = atomWithStorage<string[]>(
  'search-recent',
  [],
);
