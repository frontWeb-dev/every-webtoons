import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { getUid } from '@libs/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Auth = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  const uid = getUid();

  // 인증 여부 확인
  if (uid === null) {
    toast.error(<h1>로그인을 해주세요!</h1>);

    setTimeout(() => {
      navigate('/sign-in');
    }, 1500);

    return (
      <>
        <ToastContainer position='top-center' />
      </>
    );
  }

  return <div>{children}</div>;
};

export default Auth;
