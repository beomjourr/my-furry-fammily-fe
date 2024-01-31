import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/admin/animal-hospitals';

export interface OperationTimeRequestData {
  day_of_week_status: string;
  start_time: number[];
  end_time: number[];
  is_day_off: boolean;
}

export const postHospitalOperationTime = ({
  id,
  data,
}: {
  id?: string;
  data: OperationTimeRequestData[];
}) => {
  return axiosInstance.post(`${PATH}/${id}/operation-time`, data);
};

export const patchHospitalOperationTime = ({
  id,
  data,
}: {
  id?: string;
  data: OperationTimeRequestData[];
}) => {
  return axiosInstance.patch(`${PATH}/${id}/operation-time`, data);
};
