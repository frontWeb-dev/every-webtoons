import { FieldErrors, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { database, loginEmail, loginGoogle } from '@firebase';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { RootState } from '@store/store';
import { login } from '@store/userSlice';
import { useEffect } from 'react';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

interface LoginForm {
  email: string;
  password: string;
  error?: string;
}

interface ExistUserForm {
  email: string;
  displayName: string;
  photoURL: string;
}

const Login = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onChange' });

  // firestore에 유저 정보 있는지 확인
  const existUser = async (detail: ExistUserForm) => {
    const { displayName, email, photoURL } = detail;
    const docRef = doc(database, 'users', displayName);
    const docSnap = await getDoc(docRef);

    // 구글로 로그인한 적이 없으면 유저 정보 추가
    if (!docSnap.exists()) {
      await setDoc(doc(database, 'users', displayName), {
        email,
        username: displayName,
        avatar: photoURL,
        liked: [],
      });
    }
  };

  // 구글 로그인
  const googleLogin = async () => {
    const response = await loginGoogle();
    const detail = response.user;
    try {
      const { displayName, email, photoURL } = detail;
      existUser(detail);
      dispatch(login({ name: displayName, email, photoURL }));
      SucessLogin(detail.uid);
    } catch (error) {
      console.log(error);
    }

    return detail;
  };

  // 이메일 / 비밀번호 로그인
  const onValid = async (data: LoginForm) => {
    await loginEmail(data.email, data.password)
      .then((res: any) => {
        const { displayName, email } = res.user;
        dispatch(login({ ...user, name: displayName, email: email }));
        SucessLogin(res.user.uid);
      })
      .catch((error: any) => {
        console.log(error);
        toast.error(<h1>{error.message}</h1>, {
          autoClose: 1000,
        });
      });
  };

  const SucessLogin = (uid: string) => {
    localStorage.setItem('uid', JSON.stringify(uid));
    toast.success(<h1>로그인 성공!</h1>, {
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const onInValid = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <div className='w-full'>
      <ToastContainer position='top-center' />
      <form
        onSubmit={handleSubmit(onValid, onInValid)}
        autoComplete='off'
        className='mb-4 border-b py-4'>
        <Input
          register={register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: '올바른 이메일 주소가 아닙니다',
            },
          })}
          name='email'
          placeholder='이메일'>
          {errors.email?.message}
        </Input>

        <Input
          register={register('password', {
            required: '비밀번호를 입력하세요',
          })}
          name='password'
          type='password'
          placeholder='비밀번호'>
          {errors.password?.message}
        </Input>
        {errors.error && <p className='mb-4 pl-2 text-sm text-red-600'>{errors.error.message}</p>}

        <Button type='submit' common>
          로그인
        </Button>
        <div className='mt-2 flex justify-center space-x-2 text-sm'>
          <p>아직 회원이 아니신가요?</p>
          <Link to='/sign-up' className='text-blue-500'>
            회원가입
          </Link>
        </div>
      </form>
      <div className='flex flex-col items-center justify-center'>
        <p className='mb-4 text-sm'>소설 계정 로그인</p>
        <div className='flex w-full justify-center space-x-4'>
          <button onClick={googleLogin}>구글</button>
          <button>깃허브</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
