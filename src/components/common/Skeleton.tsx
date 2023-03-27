import React from 'react';

const Skeleton = () => {
  return (
    <div>
      <div className='w-auto border border-slate-200 '>
        <div className='h-36 w-auto animate-skeleton bg-slate-200' />
        <div className='w-auto p-2'>
          <h3 className='mb-2 h-4 w-auto animate-skeleton bg-slate-200'></h3>
          <p className='h-4 w-1/2 animate-skeleton bg-slate-200'></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
