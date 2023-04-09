import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';

interface HeaderRightProps {
  logout?: boolean;
  search?: boolean;
  onclick?: () => void;
}

const HeaderRightButton = ({ logout, search, onclick }: HeaderRightProps) => {
  return (
    <button onClick={onclick} className='absolute right-4'>
      <span className='sr-only'>{logout ? '로그아웃' : '웹툰 검색'}</span>
      {logout && <HiOutlineLogout size={28} />}
      {search && <AiOutlineSearch size={28} />}
    </button>
  );
};

export default HeaderRightButton;
