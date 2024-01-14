import { DetailTab } from '../DetailTab';
import styles from '../page.module.scss';

function Index() {
  return (
    <>
      <div className={styles.container}>
        <DetailTab />
      </div>
    </>
  );
}

export default Index;
