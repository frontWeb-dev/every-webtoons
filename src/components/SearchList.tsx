import { getSearchWebtoon } from '@api/webtoon';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './common/Input';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await getSearchWebtoon(searchValue);
    setSearchList(response);
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log(searchList);
  }, [searchList]);

  return (
    <div className='fiex min-h-screen w-full max-w-md px-4 py-20'>
      <form onSubmit={handleSubmit} className='relative'>
        <Input onChange={changeValue} type='text' placeholder='검색어를 입력하세요' />
        <button type='submit' className='absolute top-3 right-0 px-3'>
          <AiOutlineSearch size={28} />
        </button>
      </form>

      <div className='h-full w-full overflow-y-auto'>
        {searchList?.map((webtoon) => (
          <Link to={`/${webtoon.service}/${webtoon.title}`}>
            <div key={webtoon._id} className=' mb-4 flex space-x-4'>
              <img src={webtoon.img} className='h-auto w-28' />
              <div className='flex flex-col justify-center'>
                <h2>{webtoon.title}</h2>
                <p>{webtoon.author}</p>
                <p>{webtoon.service}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
