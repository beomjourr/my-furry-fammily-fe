import { fetcher } from '../utils/fetcher';

export async function searchHospital(url: string) {
  const response = fetcher.get(url);

  return response;
}
