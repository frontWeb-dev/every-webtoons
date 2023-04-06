import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Webtoon } from '@types';
import { getServiceWebtoon } from '@api/webtoon';
import { Tabs } from '@mocks/Tab';
import Layout from '@components/common/Layout';
import Tab from '@components/common/Tab';
import Skeleton from '@components/common/Skeleton';

const FilterPage = () => {
  const [updateDay, setUpdateDay] = useState({ label: '월', name: 'mon' });
  const { category } = useParams();

  const { data, isLoading } = useQuery(
    ['webtoons', updateDay, category],
    async () => await getServiceWebtoon(category, updateDay.name)
  );

  if (!category) return <div>Loading</div>;

  const onclick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    const name = target.dataset.name;
    const text = target.innerText;
    setUpdateDay({ label: text, name: name });
  };

  // 카테고리가 바뀌면 요일 초기화
  useEffect(() => {
    setUpdateDay({ label: '월', name: 'mon' });
  }, [category]);

  return (
    <Layout hasTabBar title='모두의 웹툰'>
      <div className='fixed flex h-[40px] w-full max-w-md justify-around border-b bg-white'>
        {category !== 'naver' &&
          Tabs.filter((menu) => !menu.onlyNaver).map((menu, i) => (
            <Tab
              key={i}
              onClick={onclick}
              name={menu.name}
              label={menu.label}
              updateDay={updateDay.label}
            />
          ))}

        {category == 'naver' &&
          Tabs.map((menu, i) => (
            <Tab
              key={i}
              name={menu.name}
              onClick={onclick}
              label={menu.label}
              updateDay={updateDay.label}
            />
          ))}
      </div>
      <div className='grid grid-cols-3 gap-y-4  gap-x-2 px-4 pb-12 pt-[55px]'>
        {isLoading || data.length === 0 ? (
          <>
            {[...Array(15)].map((_, i) => (
              <Link to={`/list/${i}`} key={i}>
                <Skeleton key={i} />
              </Link>
            ))}
          </>
        ) : (
          <>
            {data?.map((webtoon: Webtoon) => (
              <Link to={`/list/${webtoon.title}`} key={webtoon._id}>
                <img
                  className='h-40 w-full border border-slate-200 object-cover'
                  src={webtoon.img}
                />
                <h3 className='text-elipse mt-2 text-sm font-bold leading-4 '>{webtoon.title}</h3>
              </Link>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default FilterPage;
