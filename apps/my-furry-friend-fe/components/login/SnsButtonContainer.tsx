'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SnsButton } from '@my-furry-family/next-ui-component';

interface SnsButtonContainerProps {
  type: 'kakao';
}
function SnsButtonContainer({ type }: SnsButtonContainerProps) {
  const router = useRouter();

  const handleKaKaoLogin = () => {
    router.replace(
      'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=23172c0f75d5e36e75bc0313d5701da4&redirect_uri=http://localhost:4200/login/callback',
    );
  };

  const handleSocialLogin = {
    kakao: handleKaKaoLogin,
  };

  return <SnsButton type={type} onClick={handleSocialLogin[type]} />;
}

export default SnsButtonContainer;
