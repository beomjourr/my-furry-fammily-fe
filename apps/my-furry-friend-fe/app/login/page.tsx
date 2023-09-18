import styles from './page.module.scss';
import Title from '../../components/login/Title';
import SnsButtonContainer from '../../components/login/SnsButtonContainer';

export default async function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Title />
        <SnsButtonContainer type="kakao" />
      </div>
    </div>
  );
}
