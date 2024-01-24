import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/admin/animal-hospitals';

export interface AnimalHospitalsClinicTypeData {
  id: string;
  clinic_type: string;
  description: string;
}

export const getAnimalHospitalsClinicType = (): Promise<
  AxiosResponse<{ data: AnimalHospitalsClinicTypeData[] }>
> => {
  return axiosInstance.get(`${PATH}/clinic-types`);
};

export const postAnimalHospitalsClinicType = (
  data: Omit<AnimalHospitalsClinicTypeData, 'id'>,
) => {
  return axiosInstance.post(`${PATH}/clinic-type`, data);
};

export const patchAnimalHospitalsClinicType = (
  id: string,
  data: Omit<AnimalHospitalsClinicTypeData, 'id'>,
) => {
  return axiosInstance.patch(`${PATH}/clinic-type/${id}`, data);
};
