'use client';

import { SnsButton } from '@my-furry-family/next-ui-component';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header/Header';
import styles from './page.module.scss';

export default async function Signup() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Header isBack onBackClick={() => router.push('/login')} />
      <div className={styles.innerContainer}>
        test 테스트
        <SnsButton type="kakao" />
      </div>
    </div>
  );
}
