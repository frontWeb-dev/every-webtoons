import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col justify-center space-y-8 bg-white px-4'>
      <div className='flex w-full flex-col justify-center'>
        <h1 className='mb-4 text-3xl font-semibold'>
          모아봐요,
          <br />
          모두의 웹툰!
        </h1>
        <p>
          네이버, 카카오, 카카오페이지,
          <br />
          한꺼번에 모아보기, 모두의 웹툰!
        </p>
      </div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
