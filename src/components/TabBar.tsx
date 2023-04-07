import React from "react";
import { joinClass } from "@libs/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { menus } from "@mocks/menu";

const TabBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onclick = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <div className="items-baselind fixed bottom-0 ml-2 flex w-full max-w-md justify-around  border-t bg-white p-4">
      {menus.map((menu, i) => (
        <Link to={`${menu.path}`} key={i}>
          <div
            key={i}
            className={joinClass(
              "flex flex-col items-center",
              menu.path === pathname ? "text-blue-500" : ""
            )}
          >
            {menu.icons}
            <p className="mt-1 text-xs">{menu.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
