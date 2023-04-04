import Button from '@components/common/Button';
import { AiOutlineHeart } from 'react-icons/ai';

const SkeletonDetail = () => {
  return (
    <>
      <div className='h-[55vh] w-full  bg-slate-200'></div>
      <div className='flex h-[45vh] flex-col justify-between p-4'>
        <div className='flex justify-between'>
          <div className='flex w-1/2 flex-col space-y-1 '>
            <div className='mb-2 animate-skeleton bg-slate-200 py-4' />
            <div className='mb-2  w-2/3 animate-skeleton bg-slate-200 py-2' />
            <div className='mb-2  w-1/2 animate-skeleton bg-slate-200 py-2' />
            <div className='mb-2  w-2/3 animate-skeleton bg-slate-200 py-2' />
            <div className='mb-2  w-1/2 animate-skeleton bg-slate-200 py-2' />
          </div>
          <div>
            <AiOutlineHeart size={30} />
          </div>
        </div>
        <Button common>Loading</Button>
      </div>
    </>
  );
};

export default SkeletonDetail;
