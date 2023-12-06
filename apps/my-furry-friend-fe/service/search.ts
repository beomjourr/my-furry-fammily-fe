import { fetcher } from '../utils/fetcher';
import { SearchHospitalParams } from '../types/apis';

export function searchHospital(
  url: string,
  params: Partial<SearchHospitalParams>,
) {
  return fetcher.get(url, {
    params,
  });
}
