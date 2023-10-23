import { PetInfo } from '../types/apis';
import { fetcher } from '../utils/fetcher';

export async function saveSurvey(url: string, { arg }: { arg: PetInfo }) {
  const response = fetcher.patch<PetInfo>(url, arg);

  return response;
}
