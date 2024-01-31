import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/admin/animal-hospitals';

export const getHospitalsCategories = (): Promise<
  AxiosResponse<{
    data: {
      id: string;
      description: string;
    }[];
  }>
> => {
  return axiosInstance.get(`${PATH}/categories`);
};

export const postHospitalCategory = ({
  id,
  data,
}: {
  id?: string;
  data: {
    description: string;
  };
}) => {
  return axiosInstance.post(`${PATH}/${id}/category`, data);
};

export const patchHospitalCategory = ({
  id,
  data,
}: {
  id: number;
  data: {
    description: string;
  };
}) => {
  return axiosInstance.patch(`${PATH}/${id}/category`, data);
};

export const deleteHospitalCategory = ({
  id,
  data,
}: {
  id: number;
  data: {
    description: string;
  };
}) => {
  return axiosInstance.delete(`${PATH}/${id}/category`, {
    data,
  });
};
