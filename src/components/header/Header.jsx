import { BiCoinStack } from "react-icons/bi";
import Profile from "../profile/Profile";
import Search from "../seacrh/Search";
import { Hamburger } from "./HamburgerMenu";

const Header = () => {
  return (
    <>
      <div className="container flex items-center py-5 justify-between border-mainfg w-full  border-b-2">
        <div className="md:hidden">
          <Hamburger />
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold">
            Blon<span className="text-primary font-bold">djoe</span>
          </h1>
          <div className="md:flex hidden">
            <Search />
          </div>
          {/* coin */}
          <div className="md:flex items-center bg-base-25 w-full h-10 rounded-full px-5 hidden">
            <BiCoinStack className="text-current" size={18} />
            <p className="text-current font-semibold ml-2">Coin:2500,7862</p>
          </div>
        </div>
        <div className="md:flex hidden">
          <Profile />
        </div>
      </div>
      {/* search-Mobile */}
      <div className="flex md:hidden my-5 items-center justify-center">
        <Search />
      </div>
    </>
  );
};

export default Header;
