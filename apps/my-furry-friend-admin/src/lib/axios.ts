import axios from 'axios';
import { getRefreshToken } from '../models/auth/auth.ts';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.defaults.paramsSerializer = (paramObj) => {
  const params = new URLSearchParams();
  Object.entries(paramObj).forEach(([key, value]) => {
    params.append(key, value);
  });

  return params.toString();
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('access_token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status < 500 && error.response.status >= 400) {
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        const { data, status } = await getRefreshToken(refreshToken);
        const { access_token, refresh_token } = data.data.data;

        if (status === 200) {
          sessionStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);

          axiosInstance.defaults.headers.common['Authorization'] =
            `Bearer ${access_token}`;

          return axiosInstance(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  },
);
