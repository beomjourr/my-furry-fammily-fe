import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/admin/animal';

export interface AnimalInfoResponseData {
  id: string;
  type: string;
  weight: string;
  description: string;
}

export interface AnimalInfoRequestData {
  id: string;
  animal_type: string;
  animal_weight: string;
  animal_description: string;
}

export const getAnimal = (): Promise<
  AxiosResponse<{ data: AnimalInfoResponseData[] }>
> => {
  return axiosInstance.get(PATH);
};

export const postAnimal = (data: Omit<AnimalInfoRequestData, 'id'>) => {
  return axiosInstance.post(PATH, data);
};

export const patchAnimal = (
  id: string,
  data: Omit<AnimalInfoRequestData, 'id'>,
) => {
  return axiosInstance.patch(`${PATH}/${id}`, data);
};
