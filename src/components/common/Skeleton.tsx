import React from 'react';

const Skeleton = () => {
  return (
    <div>
      <div className='w-26 border border-slate-200'>
        <div className='h-40 w-auto animate-skeleton bg-slate-200' />
        <div className='w-auto p-2'>
          <h3 className='mb-2 h-4 w-auto animate-skeleton bg-slate-200'></h3>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
