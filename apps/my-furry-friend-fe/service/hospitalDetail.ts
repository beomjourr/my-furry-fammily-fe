import { AxiosResponse } from 'axios';
import { fetcher } from '../utils/fetcher';

interface SearchHospitalReviewParams {
  animalHospitalId: string | string[];
  page: number;
  size: number;
}

export function searchHospitalDeatilInfo(
  id: string | string[],
): Promise<AxiosResponse<{ data: { key: string; value: string }[] }>> {
  return fetcher.get(`/animal-hospitals/${id}`);
}

export function searchHospitalReview(
  params?: Partial<SearchHospitalReviewParams>,
): Promise<AxiosResponse<{ data: { key: string; value: string }[] }>> {
  return fetcher.get('/reviews', {
    params,
  });
}
