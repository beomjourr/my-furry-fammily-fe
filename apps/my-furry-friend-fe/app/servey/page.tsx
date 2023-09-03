import { SnsButton } from '@my-furry-family/next-ui-component';
import { SignUpHeader } from '../../components/SignUpHeader/SignUpHeader';
import styles from './page.module.scss';

export default async function Login() {
  return (
    <div className={styles.container}>
      <SignUpHeader />
      <div className={styles.innerContainer}>
        test 테스트
        <SnsButton type="kakao" />
      </div>
    </div>
  );
}
