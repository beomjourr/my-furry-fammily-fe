import { axiosInstance } from '../../lib/axios.ts';
import { AxiosResponse } from 'axios';

export interface HospitalRequestParams {
  name: string;
  regions: string[];
  values: string[];
  categories: string[];
  latitude: number;
  longitude: number;
  distance: number;
}

export interface HospitalRequestData {
  id: number;
  name: string;
  tell: string;
  veterinarian_numbers: number;
  scale: string;
  street_address: string;
  region: string;
  latitude: number;
  longitude: number;
  is_cooperation: boolean;
}

export interface HospitalCategoryResponse {
  key: string;
  value: string;
}

const PATH = '/animal-hospitals';

export const getHospitalSearch = (
  params?: Partial<HospitalRequestParams>,
): Promise<
  AxiosResponse<{
    data: {
      cooperationAnimalHospitals: HospitalRequestData[];
      nonCooperationAnimalHospitals: HospitalRequestData[];
    };
  }>
> => {
  return axiosInstance.get(`${PATH}/search`, {
    params,
  });
};

export const getHospitalSearchConditions = (): Promise<
  AxiosResponse<{
    data: {
      scales: HospitalCategoryResponse[];
      categories: HospitalCategoryResponse[];
      regions: HospitalCategoryResponse[];
    };
  }>
> => {
  return axiosInstance.get(`${PATH}/search-conditions`);
};

export const postHospital = (
  data: Omit<Partial<HospitalRequestData>, 'id'>,
) => {
  return axiosInstance.post(PATH, data);
};

export const getHospitalScales = (): Promise<
  AxiosResponse<{ data: HospitalCategoryResponse[] }>
> => {
  return axiosInstance.get(`${PATH}/scales`);
};

export const getHospitalRegions = (): Promise<
  AxiosResponse<{ data: HospitalCategoryResponse[] }>
> => {
  return axiosInstance.get(`${PATH}/regions`);
};

export const getHospitalCategories = (): Promise<
  AxiosResponse<{ data: HospitalCategoryResponse[] }>
> => {
  return axiosInstance.get(`${PATH}/categories`);
};

export const postHospitalCategories = (categories: {
  categories: { name: string; description: string }[];
}) => {
  return axiosInstance.post(`${PATH}/category`, {
    categories,
  });
};

export const patchHospitalCategory = ({
  id,
  category,
}: {
  id: number;
  category: string;
}) => {
  return axiosInstance.patch(
    `${PATH}/${id}/category`,
    {},
    {
      params: {
        category,
      },
    },
  );
};
