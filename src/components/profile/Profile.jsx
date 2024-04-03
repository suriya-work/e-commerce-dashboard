import { BiCategory } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import users from "../../../public/images/profile.png";
const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-5 cursor-pointer">
      <div className="relative bg-mainfg rounded-full w-8 h-8">
        <CiBellOn className="text-white ml-1 mt-1" size={22} />
        <span className="absolute rounded-full w-2 h-2 right-2 bottom-0 top-1 flex items-center justify-center text-white bg-[#a01236]"></span>
      </div>
      <div className="flex items-center justify-center bg-mainfg rounded-full w-8 h-8">
        <GoHeart className="text-white" size={20} />
      </div>
      <div className="flex items-center justify-center bg-mainfg rounded-full w-8 h-8">
        <TbShoppingBag className="text-white " size={20} />
      </div>
      <div className="border-mainfg border-r-2 h-10"></div>
      <BiCategory className="text-mainfg" size={24} />
      <img src={users} alt="profile" className="rounded-full w-8 h-8" />
    </div>
  );
};

export default Profile;
