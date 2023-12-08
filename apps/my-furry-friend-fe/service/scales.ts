import { AxiosResponse } from 'axios';
import { fetcher } from '../utils/fetcher';

export function searchScales(): Promise<
  AxiosResponse<{ data: { key: string; value: string }[] }>
> {
  return fetcher.get('/animal-hospitals/scales');
}
