import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@components/common/Layout';
import Skeleton from '@components/common/Skeleton';
import Button from '@components/common/Button';

const MyPage = () => {
  const [liked, setLiked] = useState([...Array(6)]);
  return (
    <Layout title='마이 페이지' goBack='/' logout>
      <div className=''>
        <div className='flex h-[20vh] items-center space-x-6 border-b px-6'>
          <div className='h-24 w-24 rounded-full bg-slate-200'></div>
          <div className='flex flex-col space-y-2'>
            <h2>이름</h2>
            <p>이메일</p>
            <label
              htmlFor='changeProfile'
              className='rounded-md border border-blue-500 bg-blue-500 p-1 text-sm text-white'>
              사진 변경
            </label>
            <input id='changeProfile' type='file' className='hidden' />
          </div>
        </div>
        <div className='relative flex min-h-[80vh] flex-col space-y-4 p-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>관심 웹툰</h2>
            {liked.length > 4 && (
              <Link to='/' className='text-sm font-semibold text-blue-500'>
                전체 보기 &gt;
              </Link>
            )}
          </div>
          <div className='max-h-[65vh] overflow-hidden'>
            {liked.length === 0 ? (
              <h3 className='absolute top-1/3 left-1/2 mx-auto -translate-x-1/2 -translate-y-1/3'>
                관심 웹툰이 없어요!
              </h3>
            ) : (
              <div className='grid grid-cols-2 gap-4 '>
                {liked.slice(0, 4).map((_, i) => (
                  <Skeleton />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
