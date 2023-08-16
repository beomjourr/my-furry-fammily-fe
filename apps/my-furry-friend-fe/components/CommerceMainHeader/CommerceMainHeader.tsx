import Image from 'next/image';
import logo from '../../public/store_logo.svg';
import search from '../../public/search.svg';
import shop from '../../public/shop.svg';
import styles from './CommerceMainHeader.module.scss';

export function CommerceMainHeader() {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo" />
      <div className={styles.right}>
        <Image src={search} alt="search" />
        <Image src={shop} alt="shop" />
      </div>
    </div>
  );
}
