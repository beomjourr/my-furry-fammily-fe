import { Button, SnsButton } from '@my-furry-family/next-ui-component';
import { CommerceMainHeader } from '../../components/CommerceMainHeader/CommerceMainHeader';
import styles from './page.module.scss';

export default async function Login() {
  return (
    <div className={styles.container}>
      <CommerceMainHeader />
      <div className={styles.innerContainer}>
        test 테스트
        <SnsButton type="kakao" />
      </div>
      <Button>버튼</Button>
    </div>
  );
}
