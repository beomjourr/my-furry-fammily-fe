'use client';

import { useQuery } from '@tanstack/react-query';
import { DetailTab } from '../../../components/HospitalDetail/DetailTab';
import styles from './page.module.scss';
import { searchHospitalDetailInfo } from '../../../service/hospitalDetail';

export default function Page({ params }: { params: { id: string } }) {
  const { data: hospitalData } = useQuery({
    queryKey: [`/animal-hospitals/${params.id}`],
    queryFn: () => searchHospitalDetailInfo(params.id),
  });

  return (
    <div className={styles.container}>
      <DetailTab id={params.id} hospitalData={hospitalData?.data.data} />
    </div>
  );
}
