import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Layout from '@components/common/Layout';
import Button from '@components/common/Button';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getWebtoonInfo } from '@api/webtoon';
import SkeletonDetail from '@components/SkeletonDetail';

const DetailPage = () => {
  const { title } = useParams();
  const { data, isLoading } = useQuery(['webtoon'], async () => await getWebtoonInfo(title));

  const [isLike, setIsLike] = useState(false);

  if (isLoading) {
    return (
      <Layout goBack='/'>
        <SkeletonDetail />
      </Layout>
    );
  }

  return (
    <Layout goBack='/' detail>
      <img
        className='h-[55vh] w-full bg-slate-200 object-cover object-top'
        src={data[0].img}
        alt={data[0].title}
      />
      <div className='flex h-[45vh] flex-col justify-between p-4'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-1'>
            <h1 className='mb-2 text-xl font-semibold'>{data[0].title}</h1>
            <p>{data[0].author}</p>
            <p>
              <span>{data[0].service}</span> / <span>{data[0].updateDays.join(' ')}</span>
            </p>
            <p>
              좋아요 : <span>{data[0].fanCount}</span>
            </p>
          </div>
          <div onClick={() => setIsLike((prev) => !prev)}>
            {isLike ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
          </div>
        </div>
        <Button common url={data[0].url}>
          보러 가기
        </Button>
      </div>
    </Layout>
  );
};

export default DetailPage;
