import { SiNaver, SiKakaotalk, SiWebtoon } from 'react-icons/si';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
export const menus = [
  {
    path: '/',
    label: '홈',
    icons: <AiOutlineHome size={28} />,
  },
  {
    path: '/naver',
    label: '네이버 웹툰',
    icons: <SiNaver size={26} />,
  },
  {
    path: '/kakao',
    label: '카카오 웹툰',
    icons: <SiWebtoon size={28} />,
  },
  { path: '/kakaoPage', label: '카카오 페이지', icons: <SiKakaotalk size={28} /> },
  {
    path: '/user',
    label: '마이페이지',
    icons: <AiOutlineUser size={28} />,
  },
];
