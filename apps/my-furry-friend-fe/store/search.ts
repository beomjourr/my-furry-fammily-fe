import { atom } from 'jotai';

interface Search {
  regions?: string[];
  categories?: string[];
  scales?: string[];
}

export const search = atom<Search>({
  regions: [],
  categories: [],
  scales: [],
});
