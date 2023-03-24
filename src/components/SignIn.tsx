import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Button from './common/Button';
import Input from './common/Input';

const Login = () => {
  const navigate = useNavigate();

  // 이메일 & 비밀번호 유효성 검사

  // google 로그인 시도 -> 성공 시 로컬 스토리지에 uid 저장

  return (
    <div className='w-full'>
      <ToastContainer />
      <form autoComplete='off' className='mb-4 border-b py-4'>
        <Input id='email' type='email' name='email' placeholder='이메일' />
        {/* <AlertMsg>{errors.email}</AlertMsg> */}

        <Input
          id='password'
          type='password'
          name='password'
          placeholder='비밀번호'
        />
        {/* <AlertMsg>{errors.password}</AlertMsg> */}

        <Button type='submit' common>
          로그인
        </Button>
        <div className='flex justify-center space-x-2 text-sm'>
          <p>아직 회원이 아니신가요?</p>
          <Link to='/sign-up' className='text-blue-500'>
            회원가입
          </Link>
        </div>
      </form>
      <div className='flex flex-col items-center justify-center'>
        <p className='mb-4 text-sm'>소설 계정 로그인</p>
        <div className='flex w-full justify-center space-x-4'>
          <button>구글</button>
          <button>깃허브</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
