import { fetcher } from '../utils/fetcher';

export function fetchAddress(location?: {
  latitude: number;
  longitude: number;
}) {
  return fetcher.get(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location?.longitude}&y=${location?.latitude}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_APP_REST_API_KEY}`,
      },
    },
  );
}

export function fetchAddressTransCoord(
  address: string,
  type: 'exact' | 'similar' = 'exact',
) {
  return fetcher.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${address}&analyze_type=${type}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_APP_REST_API_KEY}`,
      },
    },
  );
}
