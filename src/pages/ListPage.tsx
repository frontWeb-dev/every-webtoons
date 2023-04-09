import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Tabs } from '@mocks/Tab';
import Layout from '@components/common/Layout';
import Skeleton from '@components/common/Skeleton';
import Tab from '@components/common/Tab';
import { getAllWebtoons } from '@api/webtoon';
import { Webtoon } from '@types';
import Card from '@components/Card';

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

  return (
    <Layout hasTabBar title='모두의 웹툰' search>
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
              <Skeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {data?.map((webtoon: Webtoon) => (
              <Card webtoon={webtoon} />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default ListPage;
