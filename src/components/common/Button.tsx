import React from 'react';

interface ButtonProps {
  common?: boolean;
  submit?: boolean;
  cancle?: boolean;
  [key: string]: any;
  children: React.ReactNode;
}

const Button = ({ common, submit, cancle, children, ...rest }: ButtonProps) => {
  return (
    <>
      {common && (
        <button {...rest} className='mb-1 w-full rounded-xl bg-blue-500 py-3 text-white'>
          {children}
        </button>
      )}

      {submit ||
        (cancle && (
          <div className='my-4 flex w-full justify-between'>
            {submit && (
              <button {...rest} className='w-[48%] rounded-xl bg-blue-500 py-3 text-white'>
                {children}
              </button>
            )}

            {cancle && (
              <button {...rest} className='w-[48%] rounded-xl bg-red-500 py-3 text-white'>
                {children}
              </button>
            )}
          </div>
        ))}
    </>
  );
};

export default Button;
