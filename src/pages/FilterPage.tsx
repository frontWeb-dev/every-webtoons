import { Link, useParams } from 'react-router-dom';
import Layout from '@components/common/Layout';
import { useEffect, useState } from 'react';
import { Tabs } from '@mocks/Tab';
import Tab from '@components/common/Tab';
import Skeleton from '@components/common/Skeleton';

const FilterPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [updateDay, setUpdateDay] = useState('신작');
  const { category } = useParams();

  if (!category) return <div>Loading</div>;

  const onclick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const text = target.innerText;
    setUpdateDay(text);
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <Layout hasTabBar title='모두의 웹툰'>
      <div className='fixed flex h-[40px] w-full max-w-md justify-around border-b bg-white'>
        {category !== 'naver' &&
          Tabs.filter((a) => !a.onlyNaver).map((a, i) => (
            <Tab key={i} onClick={onclick} label={a.label} updateDay={updateDay} />
          ))}

        {category == 'naver' &&
          Tabs.map((a, i) => (
            <Tab key={i} onClick={onclick} label={a.label} updateDay={updateDay} />
          ))}
      </div>
      <div className='grid grid-cols-3 gap-y-4  gap-x-2 px-4 pb-12 pt-[55px]'>
        {isLoading &&
          [...Array(9)].map((_, i) => (
            <Link to={`/list/${i}`}>
              <Skeleton key={i} />
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default FilterPage;
