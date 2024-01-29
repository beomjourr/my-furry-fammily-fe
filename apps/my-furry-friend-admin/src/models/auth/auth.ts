import { axiosInstance } from '../../lib/axios.ts';

interface LoginRequest {
  account_id: string;
  password: string;
}

export const postLogin = ({ account_id, password }: LoginRequest) => {
  return axiosInstance.post('/auth/admin/login', { account_id, password });
};

export const getRefreshToken = (refreshToken: string) => {
  return axiosInstance.get('/auth/admin/refresh', {
    params: {
      refreshToken,
    },
  });
};
