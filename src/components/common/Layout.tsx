import { Link, useLocation, useNavigate } from "react-router-dom";
// icons
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

import { menus } from "@mocks/menu";
import { joinClass } from "@libs/utils";
import { useEffect, useState } from "react";
import Input from "./Input";
import { getSearchWebtoon } from "@api/webtoon";
import SearchList from "@components/SearchList";

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  goBack?: string;
  detail?: boolean;
  logout?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  goBack,
  detail,
  hasTabBar,
  logout = false,
  children,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const changeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const LoggedOut = () => {
    alert("logout");
  };
  const onclick = (path: string) => {
    navigate(`${path}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getSearchWebtoon(searchValue);
    setSearchList(response);
  };

  useEffect(() => {
    console.log(searchList);
  }, [searchList]);

  return (
    <div className="mx-auto max-w-md bg-white">
      {/* 헤더  */}
      <header
        className={joinClass(
          "fixed top-0 z-[1000] flex h-16 w-full max-w-md items-center justify-center px-4 text-lg font-medium text-gray-700",
          detail ? "border-transparent " : "border-b bg-white shadow-sm"
        )}
      >
        {/* 뒤로가기 */}
        {goBack && (
          <div className="absolute left-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
            <button onClick={() => onclick(goBack)}>
              <MdKeyboardArrowLeft size={32} />
            </button>
          </div>
        )}

        {/* 제목 */}
        {title && <h1 className="text-xl font-semibold">{title}</h1>}

        {/* 로그아웃  */}
        {logout && (
          <button onClick={LoggedOut} className="absolute right-4">
            <HiOutlineLogout size={28} />
          </button>
        )}

        <button className="absolute right-4" onClick={() => setIsOpen(true)}>
          검색
        </button>
      </header>

      {/* 검색 창  */}
      {isOpen && (
        <div className="fiex min-h-screen w-full max-w-md px-4 pt-20">
          <form onSubmit={handleSubmit} className="relative">
            <Input onChange={changeValue} type="text" placeholder="검색어를 입력하세요" />
            <button type="submit">검색하기</button>
          </form>

          {searchList?.map((webtoon) => (
            <SearchList webtoon={webtoon} />
          ))}
        </div>
      )}

      <div
        className={joinClass(
          "relative w-full max-w-md",
          hasTabBar ? "pb-16" : "",
          detail ? "" : "mt-16"
        )}
      >
        {children}
      </div>

      {/* 메뉴바  */}
      {hasTabBar && (
        <div className="items-baselind fixed bottom-0 ml-2 flex w-full max-w-md justify-around  border-t bg-white p-4">
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => onclick(menu.path)}
              className={joinClass(
                "flex flex-col items-center",
                menu.path === pathname ? "text-blue-500" : ""
              )}
            >
              {menu.icons}
              <p className="mt-1 text-xs">{menu.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Layout;
