import styles from './page.module.scss';
import { CommerceMainHeader } from '../components/CommerceMainHeader/CommerceMainHeader';

export default async function Home() {
  return (
    <div className={styles.container}>
      <CommerceMainHeader />
    </div>
  );
}
