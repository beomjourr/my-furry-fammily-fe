import { fetcher } from '../utils/fetcher';

export function searchCategories() {
  return fetcher.get('/animal-hospitals/categories');
}
