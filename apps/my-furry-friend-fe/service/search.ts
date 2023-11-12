import { AnimalHospitalSearchResponse } from '../types/apis';
import { fetcher } from '../utils/fetcher';

export async function searchHospital([url, latitude, longitude]: [
  string,
  number,
  number,
]) {
  const response = await fetcher.get<AnimalHospitalSearchResponse>(url, {
    params: {
      latitude,
      longitude,
      distance: 5,
    },
  });

  return response.data;
}
