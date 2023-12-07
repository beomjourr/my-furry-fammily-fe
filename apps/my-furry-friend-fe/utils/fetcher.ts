import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'http://3.39.36.33:8080/api/v1',
});

fetcher.defaults.paramsSerializer = (paramObj) => {
  const params = new URLSearchParams();
  Object.entries(paramObj).forEach(([key, value]) => {
    params.append(key, value);
  });

  return params.toString();
};
