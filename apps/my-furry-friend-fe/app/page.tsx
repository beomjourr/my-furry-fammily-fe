import styles from './page.module.scss';
import { CommerceMainHeader } from '../components/CommerceMainHeader/CommerceMainHeader';

export default async function Index() {
  return (
    <div className={styles.container}>
      <CommerceMainHeader />
    </div>
  );
}
