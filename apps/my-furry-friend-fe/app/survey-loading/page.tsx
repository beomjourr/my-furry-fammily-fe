'use client';

import Image from 'next/image';
import logo from '@my-furry-family/images/logo.svg';
import { useRouter } from 'next/navigation';
import { Button } from '@my-furry-family/next-ui-component';
import { SurveyHeader } from '../../components/survey/SurveyHeader/SurveyHeader';
import styles from './page.module.scss';

export default async function SurveyLoading() {
  const router = useRouter();

  const goToSurvey = () => {
    router.replace('/survey');
  };

  return (
    <div className={styles.container}>
      {/* header */}
      <SurveyHeader />
      <div className={styles.innerContainer}>
        <Image className={styles.img} src="" alt="loadingImg" />
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} alt="logo" />
          <div className={styles.descContainer}>
            <p className={styles.desc}>
              반려인에게 꼭 맞는 반려제품 추천을 위해 내새꾸 정보를 수집하려고
              해요. 귀찮으시겠지만 응답 부탁드립니다!
            </p>
            <p className={styles.time}>(대략 1-2분 소요됩니다)</p>
          </div>
        </div>
        <Button type="filled" className={styles.button} onClick={goToSurvey}>
          완료
        </Button>
      </div>
    </div>
  );
}
