import { AxiosResponse } from 'axios';
import { fetcher } from '../utils/fetcher';

interface SearchHospitalReviewParams {
  animalHospitalId: string | string[];
  page: number;
  size: number;
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
    main_images: string[];
    sheet_images: string[];
    thumbnail_image?: string;
  };
  health_screening_info: {
    is_offered: boolean;
    items: string[];
  };
}

export interface HospitalReviewData {
  content: {
    id: number;
    content: string;
    written_at: string;
    number_of_visits: number;
    origin_type: string;
  }[];
  totalElement: number;
  totalPage: number;
}

export function searchHospitalDeatilInfo(
  id: string | string[],
): Promise<AxiosResponse<{ data: HospitalResponseData }>> {
  return fetcher.get(`/animal-hospitals/${id}`);
}

export function searchHospitalReview(
  params?: Partial<SearchHospitalReviewParams>,
): Promise<AxiosResponse<{ data: HospitalReviewData }>> {
  return fetcher.get('/reviews', {
    params,
  });
}
