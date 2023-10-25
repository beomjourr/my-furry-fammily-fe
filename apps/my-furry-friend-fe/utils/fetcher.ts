import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'http://3.39.36.33:8080/api/v1',
});
