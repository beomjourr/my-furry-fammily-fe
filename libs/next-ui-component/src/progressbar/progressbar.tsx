import styles from './progressbar.module.scss';

/* eslint-disable-next-line */
export interface ProgressBarProps {
  max: number;
  current: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const { max, current } = props;
  return (
    <div className={styles['progress-bar']}>
      <div
        className={styles.progress}
        style={{ width: `${(current / max) * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
