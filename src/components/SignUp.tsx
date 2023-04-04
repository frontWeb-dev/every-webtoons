import { FieldErrors, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { database, signupEmail } from '@firebase';
import { useNavigate } from 'react-router-dom';

interface SignUpProps {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({ mode: 'onChange' });

  const onValid = async (data: SignUpProps) => {
    const { nickname, email, password } = data;
    await signupEmail(nickname, email, password);

    await setDoc(doc(database, 'users', nickname), {
      email,
      username: nickname,
      avatar: null,
      liked: [],
    });

    setTimeout(() => {
      navigate('/sign-in');
    }, 1000);
  };

  const onInValid = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onValid, onInValid)} className='w-full'>
        <Input
          register={register('nickname', {
            required: '닉네임을 입력하세요',
            minLength: {
              value: 2,
              message: '닉네임은 2 ~ 6자의 문자만 가능합니다.',
            },
            maxLength: {
              value: 6,
              message: '닉네임은 2 ~ 6자의 문자만 가능합니다.',
            },
          })}
          type='text'
          name='nickname'
          placeholder='닉네임'>
          {errors.nickname?.message}
        </Input>

        <Input
          register={register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: '올바른 이메일 주소가 아닙니다',
            },
          })}
          type='email'
          name='email'
          placeholder='이메일'>
          {errors.email?.message}
        </Input>
        <Input
          register={register('password', {
            required: '비밀번호를 입력하세요',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
              message: '8자 이상의 문자, 숫자, 특수문자를 포함해야 합니다.',
            },
          })}
          type='password'
          name='password'
          placeholder='비밀번호'>
          {errors.password?.message}
        </Input>
        <Input
          type='password'
          placeholder='비밀번호 확인'
          register={register('passwordConfirm', {
            required: '비밀번호를 한번 더 입력하세요',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
              message: '8자 이상의 문자, 숫자, 특수문자를 포함해야 합니다.',
            },
            validate: {
              matchPassword: (value, formValues) =>
                value === formValues.password || '비밀번호가 일치하지 않습니다.',
            },
          })}>
          {errors.passwordConfirm?.message}
        </Input>

        <hr className='mt-5 pb-8' />
        <Button type='submit' common>
          가입 하기
        </Button>
      </form>
    </>
  );
};

export default SignUp;
