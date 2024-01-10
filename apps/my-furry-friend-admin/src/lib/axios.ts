import axios from 'axios';

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
