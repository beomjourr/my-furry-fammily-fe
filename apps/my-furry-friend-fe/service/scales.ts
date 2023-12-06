import { fetcher } from '../utils/fetcher';

export function searchScales(url: string) {
  return fetcher.get(url);
}
