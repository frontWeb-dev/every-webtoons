import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface HeaderButtonProps {
  onclick: () => void;
}

const HeaderLeftButton = ({ onclick }: HeaderButtonProps) => {
  return (
    <div
      onClick={onclick}
      className="absolute left-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
    >
      <button>
        <MdKeyboardArrowLeft size={28} />
      </button>
    </div>
  );
};

export default HeaderLeftButton;
