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
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`,
    );
  };

  const handleSocialLogin = {
    kakao: handleKaKaoLogin,
  };

  return <SnsButton type={type} onClick={handleSocialLogin[type]} />;
}

export default SnsButtonContainer;
