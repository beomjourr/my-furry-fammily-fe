import { atom } from 'jotai';

export interface Search {
  [key: string]: string[];
}

export const search = atom<Search>({
  regions: [],
  categories: [],
  scales: [],
});

export const searchKeyword = atom<string>('');
