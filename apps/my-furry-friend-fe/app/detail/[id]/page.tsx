'use client';

import { DetailTab } from '../../../components/HospitalDetail/DetailTab';
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
