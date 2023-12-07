import { fetcher } from '../utils/fetcher';

export function searchScales() {
  return fetcher.get('/animal-hospitals/scales');
}
