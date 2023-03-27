import Layout from '@components/common/Layout';
import SignUp from '@components/SignUp';

const SignUpPage = () => {
  return (
    <Layout title='회원 가입' goBack='/sign-in'>
      <div className='flex w-full justify-center px-6 pt-10'>
        <SignUp />
      </div>
    </Layout>
  );
};

export default SignUpPage;
