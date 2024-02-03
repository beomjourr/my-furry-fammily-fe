import { DetailTab } from '../../../components/HospitalDetail/DetailTab';
import styles from './page.module.scss';
import { searchHospitalDeatilInfo } from '../../../service/hospitalDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const hospitalData = await searchHospitalDeatilInfo(params.id);

  return (
    <div className={styles.container}>
      <DetailTab id={params.id} hospitalData={hospitalData?.data.data} />
    </div>
  );
}
