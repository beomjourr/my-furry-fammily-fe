import Image from 'next/image';
import logo from '@/public/store_logo.svg';
import styles from './CommerceMainHeader.module.scss';

export function CommerceMainHeader() {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo" />
      <div className={styles.right} />
    </div>
  );
}
