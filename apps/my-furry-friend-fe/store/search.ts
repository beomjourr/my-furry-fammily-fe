import { atom } from 'jotai';

export interface Search {
  [key: string]: { key: string; value: string }[];
}

export const search = atom<Search>({
  regions: [],
  categories: [],
  scales: [],
});

export const searchKeyword = atom<string>('');

export const selectedFilters = atom<{
  key: string;
  value: string;
}>({
  key: '',
  value: '',
});

export const searchRecentFocusState = atom<boolean>(false);

export const searchDisplayMapState = atom<boolean>(false);
