import React from "react";
import { joinClass } from "@libs/utils";

interface TabProps {
  updateDay?: string;
  label: string;
  name: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
const Tab = ({ onClick, updateDay, label, name }: TabProps) => {
  return (
    <div
      onClick={onClick}
      data-name={name}
      className={joinClass(
        "p-2 text-center",
        updateDay === label ? "border-b-2 border-blue-500 " : ""
      )}
    >
      <p className={joinClass("text-sm", updateDay === label ? "font-bold text-blue-500" : "")}>
        {label}
      </p>
    </div>
  );
};

export default Tab;
