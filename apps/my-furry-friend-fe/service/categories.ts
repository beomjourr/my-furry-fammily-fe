import { fetcher } from '../utils/fetcher';

export function searchCategories(url: string) {
  return fetcher.get(url);
}
