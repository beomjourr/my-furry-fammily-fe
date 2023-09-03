import { IconButton } from '@my-furry-family/next-ui-component';
import backArrow from '@my-furry-family/images/ico_back.png';
import styles from './SignUpHeader.module.scss';

export function SignUpHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <IconButton className={styles.back} src={backArrow} alt="back" />
      </div>
    </div>
  );
}
