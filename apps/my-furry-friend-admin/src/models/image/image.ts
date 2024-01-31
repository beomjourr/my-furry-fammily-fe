import { axiosInstance } from '../../lib/axios.ts';

const PATH = '/image/upload';

export const postImage = (data: FormData) => {
  return axiosInstance.post(PATH, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
