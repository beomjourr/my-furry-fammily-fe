import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/admin/review';

export interface ReviewContent {
  id: number;
  content: string;
  written_at: number[];
  number_of_visits: number;
  origin_type: string;
}

export interface GetReviewResponse {
  content: ReviewContent[];
  totalElement: 3;
  totalPage: 1;
}

export interface ReviewRequestData extends Omit<ReviewContent, 'id'> {
  animal_hospital_id: number;
}

export const getHospitalReview = (params: {
  animalHospitalId: string;
  page?: string;
  size?: string;
}): Promise<AxiosResponse<{ data: GetReviewResponse }>> => {
  return axiosInstance.get('/reviews', { params });
};

export const postHospitalReview = (data: ReviewRequestData) => {
  return axiosInstance.post(PATH, data);
};

export const patchHospitalReview = ({
  reviewId,
  data,
}: {
  reviewId: number;
  data: Omit<ReviewRequestData, 'animal_hospital_id'>;
}) => {
  return axiosInstance.patch(`${PATH}/${reviewId}`, data);
};

export const deleteHospitalReview = (reviewId: number) => {
  return axiosInstance.delete(`${PATH}/${reviewId}`);
};

export const patchHospitalReviewRating = (data: {
  animal_hospital_id: number;
  rating_score: number;
}) => {
  return axiosInstance.patch(`${PATH}/rating`, data);
};
