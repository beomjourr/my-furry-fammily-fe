import { DetailTab } from '../../../components/HospitalDetail/DetailTab';
import styles from './page.module.scss';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={styles.container}>
      <DetailTab id={params.id} />
    </div>
  );
}
