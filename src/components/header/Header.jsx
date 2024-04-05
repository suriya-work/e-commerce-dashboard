import { BiCoinStack } from "react-icons/bi";
import Profile from "../profile/Profile";
import Search from "../seacrh/Search";
import { Hamburger } from "./HamburgerMenu";

const Header = () => {
  return (
    <>
      <div className="container md:col-span-8 flex items-center py-5 justify-between border-mainfg   border-b-2">
        <div className="md:hidden pl-5">
          <Hamburger />
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold md:pr-0 pr-5 ">
            Blon<span className="text-primary font-bold">djoe</span>
          </h1>
          <div className="md:flex hidden">
            <Search />
          </div>
          {/* coin */}
          <div className="md:flex items-center bg-base-25 w-full h-8 rounded-full px-5 hidden">
            <BiCoinStack className="text-current" size={18} />
            <p className="text-current font-semibold ml-2 text-sm">Coin:2500,7862</p>
          </div>
        </div>
        <div className="md:flex hidden">
          <Profile />
        </div>
      </div>
      {/* search-Mobile */}
      <div className="flex md:hidden justify-center mt-5">
        <Search />
      </div>
    </>
  );
};

export default Header;
