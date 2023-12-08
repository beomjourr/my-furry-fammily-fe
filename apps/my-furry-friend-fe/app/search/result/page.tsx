'use client';

import useSWR from 'swr';
import { useAtom } from 'jotai/index';
import Map from '../../../components/map/Map';
import { searchHospital } from '../../../service/search';
import { searchKeyword } from '../../../store/search';

export default function Index() {
  const [keyword] = useAtom(searchKeyword);

  const { data } = useSWR(
    ['/animal-hospitals/search', keyword],
    (key) =>
      searchHospital({
        ...(keyword ? { name: keyword } : {}),
      }),
    {
      errorRetryCount: 3,
    },
  );

  return (
    <Map
      hospitalData={data?.data.data.cooperationAnimalHospitals.concat(
        data?.data.data.nonCooperationAnimalHospitals,
      )}
    />
  );
}
