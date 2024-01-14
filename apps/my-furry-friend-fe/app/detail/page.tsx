import { DetailTab } from './DetailTab';
import styles from './page.module.scss';

function Detail() {
  return (
    <>
      <div className={styles.container}>
        <DetailTab />
      </div>
    </>
  );
}

export default Detail;
