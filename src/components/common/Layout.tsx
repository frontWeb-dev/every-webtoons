import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { joinClass } from '@libs/utils';
import SearchList from '@components/SearchList';
import TabBar from '@components/TabBar';
import HeaderLeftButton from '@components/HeaderLeftButton';
import HeaderRightButton from '@components/HeaderRightButton';
import { ToastContainer, toast } from 'react-toastify';

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  goBack?: string;
  detail?: boolean;
  logout?: boolean;
  search?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  goBack,
  detail,
  hasTabBar,
  logout = false,
  search,
  children,
}) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const LoggedOut = () => {
    localStorage.removeItem('user-info');
    toast.success(
      <div className='text-center'>
        <h1>로그아웃 성공</h1>
        <p>로그인 페이지로 이동합니다.</p>
      </div>,
      {
        autoClose: 1000,
      }
    );
    setTimeout(() => {
      navigate('/sign-in');
    }, 1500);
  };

  const onclick = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <>
      <ToastContainer position='top-center' />
      <div className='mx-auto max-w-md bg-white'>
        {/* 헤더  */}
        <header
          className={joinClass(
            'fixed top-0 z-[1000] flex h-16 w-full max-w-md items-center justify-center px-4 text-lg font-medium text-gray-700',
            detail ? 'border-transparent ' : 'border-b bg-white shadow-sm'
          )}>
          {/* 뒤로 가기 */}
          {goBack && <HeaderLeftButton onclick={() => onclick(goBack)} />}

          {/* 검색창 닫기 */}
          {isOpen && <HeaderLeftButton onclick={() => setIsOpen(false)} />}

          {/* 제목 */}
          {title && <h1 className='text-xl font-semibold'>{title}</h1>}

          {logout && <HeaderRightButton onclick={LoggedOut} logout />}

          {search && !isOpen && <HeaderRightButton onclick={() => setIsOpen(true)} search />}
        </header>

        {/* 검색 창  */}
        {isOpen && <SearchList />}

        {!isOpen && (
          <div
            className={joinClass(
              'relative w-full max-w-md',
              hasTabBar ? 'pb-16' : '',
              detail ? '' : 'mt-16'
            )}>
            {children}
          </div>
        )}

        {/* 메뉴바  */}
        {hasTabBar && <TabBar />}
      </div>
    </>
  );
};

export default Layout;
