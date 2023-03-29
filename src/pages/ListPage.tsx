import { useState } from 'react';
import Layout from '@components/common/Layout';
import Skeleton from '@components/common/Skeleton';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout hasTabBar title='모두의 웹툰'>
      {isLoading ? (
        <div className='grid grid-cols-2 gap-5 px-4 pt-6 pb-10'>
          {[...Array(10)].map((_, i) => (
            <Link to={`/list/${i}`}>
              <Skeleton key={i} />
            </Link>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  );
};

export default ListPage;
