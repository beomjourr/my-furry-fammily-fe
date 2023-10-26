import { IconButton } from '@my-furry-family/next-ui-component';
import backArrow from '@my-furry-family/images/ico_back.png';
import styles from './Header.module.scss';

interface Props {
  isBack: boolean;
  onBackClick?: () => void;
}

export function Header(props: Props) {
  const { isBack, onBackClick } = props;
  return (
    <div className={styles.container}>
      {isBack && (
        <div className={styles.left}>
          <IconButton
            className={styles.back}
            src={backArrow}
            alt="back"
            onClick={onBackClick}
          />
        </div>
      )}
    </div>
  );
}
