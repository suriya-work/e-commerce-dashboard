import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Aside from "../aside/Aside";
export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GiHamburgerMenu onClick={handleClick} size={20} color="#fff" />
      <div
        className={`absolute  left-0 top-0 h-screen  w-full bg-white opacity-0 ${
          isOpen
            ? "visible opacity-50 transition duration-500 ease-in-out "
            : " invisible opacity-0   transition duration-500 ease-in-out"
        }`}
        onClick={handleClick}
      >
        .
      </div>
      <div
        className={`absolute left-0 top-0 z-20 flex h-screen w-[75%] flex-col items-center gap-7 bg-mainbg drop-shadow-lg   ${
          isOpen
            ? "translate-x-[0rem] transform  transition duration-500 ease-in-out"
            : "translate-x-[-800px] transform transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex w-[75%] items-center justify-between pt-12">
          <h1 className="text-white font-bold md:hidden flex">
            Blon<span className="text-primary font-bold">djoe</span>
          </h1>
          <RxCross2 onClick={handleClick} size={20} color="#fff" />
        </div>
        {/* <Aside /> */}
        <div className="flex md:hidden w-full pl-10">
          <Aside />
        </div>
      </div>
    </>
  );
};
