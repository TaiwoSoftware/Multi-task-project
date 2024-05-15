"use client";
import { useState } from "react";
import Checkbox from "../Auth/Checkbox";
export default function CheckDiv({ listId, listTools }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    localStorage.setItem("preference", e.target.innerText);
    setIsClicked(!isClicked);
  };
  return (
    <div onClick={handleClick} className="flex gap-10 mt-6 ">
      {isClicked === true ? (<>
        <div className="border radioBorder w-[254px] px-1 py-[0.2rem] h-[69px] flex gap-6 items-center rounded-[10px]  border-gray-400 cursor-pointer">
        <Checkbox
          checkId={listId}
          tools={listTools}
          handleChecked={true}
        />
      </div>
      </>) : (<>
        <div className="border w-[254px] px-1 py-[0.2rem] h-[69px] flex gap-6 items-center rounded-[10px]  border-gray-400 cursor-pointer">
        <Checkbox
          checkId={listId}
          tools={listTools}
          handleChecked={false}
        />
      </div>
      </>)}
    </div>
  );
}
