import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

import { database, storage } from '@firebase';
import { getSearchWebtoon } from '@api/webtoon';
import { getUsername } from '@libs/utils';
import Layout from '@components/common/Layout';
import Skeleton from '@components/common/Skeleton';
import Card from '@components/Card';
import { Webtoon } from '@types';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import Profile from '@components/Profile';

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

  const getLikedWetoons = () => {
    if (user.liked) {
      user.liked.map(async (title) => {
        const data = await getSearchWebtoon(title);
        setLiked((prev) => [...prev, data[0]]);
      });
    } else return;
  };

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

  if (isLoading || !user) return <div>Loading..</div>;

  return (
    <Layout title='마이 페이지' goBack='/' logout>
      <div>
        <Profile user={user} />
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
                      <Skeleton key={i} />
                    ))}
                  </>
                ) : (
                  <>
                    {liked?.map((webtoon: Webtoon) => (
                      <Card webtoon={webtoon} key={webtoon._id} />
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
