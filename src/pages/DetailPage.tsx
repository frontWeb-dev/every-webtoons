import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Layout from '@components/common/Layout';
import Button from '@components/common/Button';

const DetailPage = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <Layout goBack='/' detail>
      <div className='h-[55vh] w-full bg-slate-200'></div>
      <div className='flex h-[45vh] flex-col justify-between p-4'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-1'>
            <h1 className='mb-2 text-xl font-semibold'>제목</h1>
            <p>작가</p>
            <p>
              <span>월요일</span>
            </p>
            <p>
              <span>카카오 페이지</span>
            </p>
            <p>
              좋아요 : <span>1,100</span>
            </p>
          </div>
          <div onClick={() => setIsLike((prev) => !prev)}>
            {isLike ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
          </div>
        </div>
        <Button common>보러 가기</Button>
      </div>
    </Layout>
  );
};

export default DetailPage;
