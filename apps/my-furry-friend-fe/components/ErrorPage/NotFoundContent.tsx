import Link from 'next/link';
import styles from './NotFoundContent.module.scss';

export function NotFoundContent() {
  return (
    <div className={styles.container}>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div>404</div>
          <div>페이지를 찾을 수 없습니다.</div>
          <Link className={styles.notfoundText} href="/">
            홈으로 이동하기
          </Link>
        </div>
      </div>
    </div>
  );
}
