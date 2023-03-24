import { FieldErrors, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { loginEmail } from '../firebase';
import Button from './common/Button';
import Input from './common/Input';

interface LoginForm {
  email: string;
  password: string;
  error?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onChange' });

  // 로그인 성공 시 로컬 스토리지에 uid 저장

  // 이메일 / 비밀번호 로그인
  const onValid = async (data: LoginForm) => {
    await loginEmail(data.email, data.password)
      .then((res) => {
        localStorage.setItem('uid', JSON.stringify(res.user.uid));

        toast.success(<h1>로그인 성공!</h1>, {
          autoClose: 1000,
        });
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        toast.error(<h1>{error.message}</h1>, {
          autoClose: 1000,
        });
      });
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
          <button>구글</button>
          <button>깃허브</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
