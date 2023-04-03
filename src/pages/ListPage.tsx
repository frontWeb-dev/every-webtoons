import { useState, useEffect } from 'react';
import Layout from '@components/common/Layout';
import Skeleton from '@components/common/Skeleton';
import { Link } from 'react-router-dom';
import { Tabs } from '@mocks/Tab';
import Tab from '@components/common/Tab';
import { useMutation, useQuery } from 'react-query';
import { getAllWebtoons } from '@api/webtoon';

const ListPage = () => {
  const [updateDay, setUpdateDay] = useState({ label: '월', name: 'mon' });

  const { data, isLoading } = useQuery(
    ['webtoons', updateDay],
    async () => await getAllWebtoons(updateDay.name)
  );

  const onclick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    const name = target.dataset.name;
    const text = target.innerText;
    setUpdateDay({ label: text, name: name });
  };

  useEffect(() => {
    console.log(updateDay);
  }, [updateDay]);

  return (
    <Layout hasTabBar title='모두의 웹툰'>
      <div className='fixed flex h-[40px] w-full max-w-md justify-around border-b bg-white'>
        {Tabs.map((a, i) => (
          <Tab
            key={i}
            onClick={onclick}
            label={a.label}
            updateDay={updateDay.label}
            name={a.name}
          />
        ))}
      </div>

      <div className='grid grid-cols-3 gap-x-2 gap-y-4 px-4 pb-10 pt-[55px]'>
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
            {data?.map((webtoon) => (
              <Link to={`/list/${webtoon.title}`} key={webtoon.id}>
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

export default ListPage;
