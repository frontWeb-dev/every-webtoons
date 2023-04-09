import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { joinClass } from '@libs/utils';
import SearchList from '@components/SearchList';
import TabBar from '@components/TabBar';
import HeaderLeftButton from '@components/HeaderLeftButton';
import HeaderRightButton from '@components/HeaderRightButton';

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
    alert('logout');
  };

  const onclick = (path: string) => {
    navigate(`${path}`);
  };

  return (
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
  );
};

export default Layout;
