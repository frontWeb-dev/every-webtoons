import React from 'react';
import Button from './common/Button';
import Input from './common/Input';

const SignUp = () => {
  // 이메일 유효성 검사, 비밀번호 유효성 검사

  // 비밀번호 === 비밀번호 확인

  // 가입 성공 - 로그인 화면으로 이동
  // 가입 실패 - toast alert

  return (
    <form className='w-full'>
      <Input type='text' name='name' placeholder='닉네임'>
        닉네임을 입력하세요.
      </Input>

      <Input type='email' name='email' placeholder='이메일'>
        이메일을 입력하세요.
      </Input>
      <Input type='password' name='password' placeholder='비밀번호'>
        비밀번호를 입력하세요.
      </Input>
      <Input type='password' name='password' placeholder='비밀번호 확인'>
        비밀번호를 확인해주세요.
      </Input>

      <hr className='mt-5 pb-8' />
      <Button type='submit' common>
        가입 하기
      </Button>
    </form>
  );
};

export default SignUp;
