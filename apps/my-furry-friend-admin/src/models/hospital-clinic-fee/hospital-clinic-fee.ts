import { AxiosResponse } from 'axios';
import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/admin/animal-hospitals';

export interface HospitalClinicFeeRequestData {
  clinic_type_category: string;
  clinic_cost_info: string;
  clinic_type_id: number;
  animal_id: number;
}

export interface HospitalClinicFeeResponseData {
  id: string;
  clinic_type_category: string;
  cost_info: string;
  clinic_type_name: string;
  clinic_type_id: number;
  animal_name: string;
  animal_id: number;
  animal_hospital_id: string;
}

export const getHospitalClinicFees = (
  id?: string,
): Promise<AxiosResponse<{ data: HospitalClinicFeeResponseData[] }>> => {
  return axiosInstance.get(`${PATH}/${id}/clinic-fees`);
};

export const postHospitalClinicFee = ({
  id,
  data,
}: {
  id?: string;
  data: HospitalClinicFeeRequestData;
}) => {
  return axiosInstance.post(`${PATH}/${id}/clinic-fee`, data);
};

export const patchHospitalClinicFee = ({
  hospitalId,
  clinicFeeId,
  data,
}: {
  hospitalId?: string;
  clinicFeeId?: string;
  data: HospitalClinicFeeRequestData;
}) => {
  return axiosInstance.patch(
    `${PATH}/${hospitalId}/clinic-fee/${clinicFeeId}`,
    data,
  );
};
