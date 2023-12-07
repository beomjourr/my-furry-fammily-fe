import { AxiosResponse } from 'axios';
import { fetcher } from '../utils/fetcher';

export function searchRegions(): Promise<
  AxiosResponse<{ data: { key: string; value: string }[] }>
> {
  return fetcher.get('/animal-hospitals/regions');
}
