import { Webtoons } from '@types';
import { Link } from 'react-router-dom';

const Card = ({ webtoon }: Webtoons) => {
  return (
    <Link to={`/${webtoon.service}/${webtoon.title}`} key={webtoon._id} className=''>
      <div className='h-40 w-full'>
        <img
          className='h-full w-full border border-slate-200 object-cover'
          src={webtoon.img}
          alt={webtoon.title}
        />
      </div>
      <h3 className='text-elipse mt-2 text-sm font-bold leading-4 '>{webtoon.title}</h3>
    </Link>
  );
};

export default Card;
