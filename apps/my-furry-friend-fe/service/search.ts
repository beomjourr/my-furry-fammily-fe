import { AxiosResponse } from 'axios';
import { fetcher } from '../utils/fetcher';

export interface HospitalResponse {
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
  is_cooperation: boolean;
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

export function searchHospital(params?: Partial<SearchHospitalParams>): Promise<
  AxiosResponse<{
    data: {
      cooperationAnimalHospitals: HospitalResponse[];
      nonCooperationAnimalHospitals: HospitalResponse[];
    };
  }>
> {
  return fetcher.get('/animal-hospitals/search', {
    params,
  });
}
