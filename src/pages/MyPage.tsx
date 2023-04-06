import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@components/common/Layout';
import Skeleton from '@components/common/Skeleton';

import { doc, getDoc } from 'firebase/firestore';
import { database } from '@firebase';
import { getWebtoonInfo } from '@api/webtoon';
import { useQuery } from 'react-query';
import { getUsername } from '@libs/utils';

interface User {
  username: string;
  email: string;
  avatar?: string;
  liked: string[];
}
const MyPage = () => {
  const username = getUsername();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    if (user) getLikedWetoons();
  }, [user]);

  useEffect(() => {
    (async () => {
      const docRef = doc(database, 'users', username);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as any;
      setUser(data);
      setIsLoading(false);
    })();
  }, []);

  const getLikedWetoons = () => {
    if (user.liked) {
      user.liked.map(async (title) => {
        const data = await getWebtoonInfo(title);
        setLiked((prev) => [...prev, data[0]]);
      });
    } else return;
  };

  if (isLoading || !user) return <div>Loading..</div>;

  return (
    <Layout title='마이 페이지' goBack='/' logout>
      <div>
        <div className='flex h-[20vh] items-center space-x-6 border-b px-6'>
          <img
            className='h-24 w-24 rounded-full bg-slate-200'
            src={user?.avatar ? user?.avatar : ''}
          />
          <div className='flex-col space-y-2'>
            <h2>{user.username}</h2>
            <p>{user?.email}</p>

            <label
              htmlFor='changeProfile'
              className='block w-20 rounded-md border border-blue-500 bg-blue-500 p-1 text-center text-sm text-white'>
              사진 변경
            </label>
            <input id='changeProfile' type='file' className='hidden' />
          </div>
        </div>
        <div className='relative flex min-h-[80vh] flex-col space-y-4 p-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>관심 웹툰</h2>
            {user.liked.length > 4 && (
              <Link to='/' className='text-sm font-semibold text-blue-500'>
                전체 보기 &gt;
              </Link>
            )}
          </div>
          <div className='min-h-[65vh] overflow-hidden'>
            {user.liked.length === 0 ? (
              <h3 className='absolute top-1/3 left-1/2 mx-auto -translate-x-1/2 -translate-y-1/3'>
                관심 웹툰이 없어요!
              </h3>
            ) : (
              <div className='grid grid-cols-2 gap-4 '>
                {isLoading || liked.length === 0 ? (
                  <>
                    {[...Array(15)].map((_, i) => (
                      <Link to={`/list/${i}`} key={i}>
                        <Skeleton key={i} />
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    {liked?.map((webtoon) => (
                      <Link to={`/list/${webtoon.title}`} key={webtoon._id}>
                        <img
                          className='h-40 w-full border border-slate-200 object-cover'
                          src={webtoon.img}
                        />
                        <h3 className='text-elipse mt-2 text-sm font-bold leading-4 '>
                          {webtoon.title}
                        </h3>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
