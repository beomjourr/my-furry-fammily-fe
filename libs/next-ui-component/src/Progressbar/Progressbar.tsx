import styles from './Progressbar.module.scss';

export interface ProgressBarProps {
  max: number;
  current: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const { max, current } = props;
  return (
    <div
      role="progressbar"
      className={styles['progress-bar']}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={current}
      aria-labelledby="progressbar"
    >
      <div
        className={styles.progress}
        style={{ width: `${(current / max) * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
