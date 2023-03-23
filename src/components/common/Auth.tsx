import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Layout from './Layout';

interface LayoutProps {
  children: React.ReactNode;
}

const Auth: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  // 인증 여부 확인
  if (false) {
    toast.error(<h1>로그인을 해주세요!</h1>);

    setTimeout(() => {
      navigate('/');
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
