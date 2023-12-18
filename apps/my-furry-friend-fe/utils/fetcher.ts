import axios from 'axios';

export const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

fetcher.defaults.paramsSerializer = (paramObj) => {
  const params = new URLSearchParams();
  Object.entries(paramObj).forEach(([key, value]) => {
    params.append(key, value);
  });

  return params.toString();
};
