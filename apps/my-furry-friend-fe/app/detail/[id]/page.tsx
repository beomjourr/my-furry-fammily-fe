import { DetailTab } from '../../../components/HospitalDetail/DetailTab';
import styles from './page.module.scss';
import { searchHospitalDetailInfo } from '../../../service/hospitalDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const hospitalData = await searchHospitalDetailInfo(params.id);

  return (
    <div className={styles.container}>
      <DetailTab id={params.id} hospitalData={hospitalData?.data.data} />
    </div>
  );
}
