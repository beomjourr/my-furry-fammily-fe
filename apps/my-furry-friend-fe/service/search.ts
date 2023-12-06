import { AxiosResponse } from 'axios';
import { fetcher } from '../utils/fetcher';

interface HospitalResponse {
  id: number;
  name: string;
  street_address: string;
  region: string;
  latitude: number;
  longitude: number;
  tell: string;
  categories: string[];
  veterinarian_numbers: number;
  scale: string;
  distance: number;
}

interface SearchHospitalParams {
  name: string | null;
  regions: string[] | null;
  scales: string[] | null;
  categories: string[] | null;
  latitudes: number | null;
  longitude: number | null;
  distance: number | null;
}

export function searchHospital(
  url: string,
  params: Partial<SearchHospitalParams>,
): Promise<AxiosResponse<{ data: HospitalResponse[] }>> {
  return fetcher.get(url, {
    params,
  });
}
