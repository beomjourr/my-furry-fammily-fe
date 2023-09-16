import React from 'react';
import Image from 'next/image';
import logo from '@my-furry-family/images/logo.svg';
import styles from '../../app/login/page.module.scss';

function Title() {
  return (
    <div className={styles.titleWrapper}>
      <Image src={logo} alt="logo" />
      <div className={styles.title}>
        <p>내 반려동물에 알맞는 제품을 추천해주는</p>
        <p>반려동물 커머스 내새꾸 스토어</p>
      </div>
    </div>
  );
}

export default Title;
