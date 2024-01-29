import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/image/upload';

interface ImageRequestData {
  file: FormData;
  request: {
    image_type: 'MAIN' | 'SHEET';
    is_thumbnail: boolean;
    animal_hospital_id: number;
  };
}

export const postImage = (data: ImageRequestData) => {
  return axiosInstance.post(PATH, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
