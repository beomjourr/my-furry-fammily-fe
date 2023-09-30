import { SnsButton } from '@my-furry-family/next-ui-component';
import { SurveyHeader } from '../../components/survey/SurveyHeader/SurveyHeader';
import styles from './page.module.scss';

export default async function Login() {
  return (
    <div className={styles.container}>
      <SurveyHeader />
      <div className={styles.innerContainer}>
        test 테스트
        <SnsButton type="kakao" />
      </div>
    </div>
  );
}
