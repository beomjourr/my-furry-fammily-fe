import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface KakaoAddressParams {
  query: string;
  analyze_type?: string;
  page?: number;
  size?: number;
}

export const useKakaoAddressQuery = (params: KakaoAddressParams) => {
  return useQuery({
    queryKey: [params],
    queryFn: () =>
      axios.get('https://dapi.kakao.com/v2/local/search/address', {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
          ['content-type']: 'application/json;charset=UTF-8',
        },
        params: {
          ...params,
        },
      }),
    enabled: !!params.query,
  });
};
