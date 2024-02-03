import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../lib/axios.ts';

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
  id: string;
  name: string;
  tell: string;
  veterinarian_numbers: number;
  scale: string;
  zip_code: string;
  has_mri: boolean;
  has_ct: boolean;
  is_cooperation: boolean;
  street_address: string;
  info_description: string;
  region: string;
  latitude: number;
  longitude: number;
  homepage_url: string;
  blog_url: string;
  instagram_url: string;
  facebook_url: string;
  youtube_url: string;
}

export type UrlType =
  | 'homepage_url'
  | 'blog_url'
  | 'instagram_url'
  | 'facebook_url'
  | 'youtube_url';

export type Url = {
  [url in UrlType]: string;
};

export interface HospitalResponseData {
  id: number;
  name: string;
  tell: string;
  veterinarian_numbers: number;
  is_cooperation: boolean;
  scale: string;
  has_mri: boolean;
  has_ct: boolean;
  info_description: string;
  review_rating: number;
  number_of_reviews: number;
  categories: string[];
  now_operation_status: string;
  url: Url;
  operating_times: {
    now_operation_status: string;
    today_operating_time: {
      day_of_week: string;
      start_time: number[];
      end_time: number[];
      is_day_off: boolean;
      is_today: boolean;
    };
    operating_times: {
      day_of_week: string;
      start_time: number[];
      end_time: number[];
      is_day_off: boolean;
    }[];
    resting_time: {
      day_of_week: string;
      start_time: number[];
      end_time: number[];
      is_day_off: boolean;
      is_today: boolean;
    };
  };
  location: {
    zip_code: string;
    street_address: string;
    region: string;
    latitude: number;
    longitude: number;
  };
  clinic_fees: {
    is_required: boolean;
    name: string;
    cost: string;
    clinic_type_name: string;
    animal_name: string;
  }[];
  images: {
    has_sheet_image: boolean;
    main_images: {
      uploaded_url: string;
      image_type: string;
      is_thumbnail: boolean;
    }[];
    sheet_images: {
      uploaded_url: string;
      image_type: string;
      is_thumbnail: boolean;
    }[];
    thumbnail_image?: string;
  };
  health_screening_info: {
    is_offered: boolean;
    items: string[];
  };
}

export interface HospitalCategoryResponse {
  key: string;
  value: string;
}

const PATH = '/animal-hospitals';

const ADMIN_PATH = '/admin/animal-hospitals';

export const getAllHospitalSearch = (
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

export const getHospital = (
  id: string,
): Promise<AxiosResponse<{ data: HospitalResponseData }>> => {
  return axiosInstance.get(`${PATH}/${id}`);
};

export const postHospital = (
  data: Omit<Partial<HospitalRequestData>, 'id'>,
) => {
  return axiosInstance.post(ADMIN_PATH, data);
};

export const patchHospital = (
  id: string,
  data: Partial<HospitalRequestData>,
) => {
  return axiosInstance.patch(`${ADMIN_PATH}/${id}`, data);
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
