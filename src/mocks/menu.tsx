import { SiNaver, SiKakaotalk, SiWebtoon } from 'react-icons/si';
import { AiOutlineHome, AiOutlineCalendar } from 'react-icons/ai';
export const menus = [
  {
    path: '/',
    label: '홈',
    icons: <AiOutlineHome size={28} />,
  },
  {
    path: '/filter/day',
    label: '요일별 웹툰',
    icons: <AiOutlineCalendar size={28} />,
  },
  {
    path: '/filter/naver',
    label: '네이버 웹툰',
    icons: <SiNaver size={26} />,
  },
  {
    path: '/filter/kakao',
    label: '카카오 웹툰',
    icons: <SiWebtoon size={28} />,
  },
  { path: '/filter/kakaoPage', label: '카카오 페이지', icons: <SiKakaotalk size={28} /> },
];
