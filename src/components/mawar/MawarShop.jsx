import { CiShop } from "react-icons/ci";
import butterfly from "../../../public/images/butterfly.jpg";
import { GoPlus } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiLike, BiLogoInstagramAlt } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
const MawarShop = () => {
  return (
    <div className="md:grid md:grid-cols-9 md:grid-rows-2 flex flex-col gap-3 py-5">
      <div className="col-span-3 row-span-2 bg-mainfg rounded-lg px-5 py-2">
        <div className="flex items-center justify-center mt-4 w-full h-28 rounded-md  bg-cover overflow-hidden">
          <img src={butterfly} alt="butterfly" />
        </div>
        <div className="flex items-center justify-between  py-3">
          <span className="flex items-center gap-1 text-white">
            <CiShop />
            <p className="text-sm">Mawar shop official</p>
          </span>
          <p className="text-green text-sm">Online</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <button className="bg-primary w-32 h-7 rounded-full hover:bg-[#2d4471]">
            <span className="flex items-center gap-1 justify-center text-white text-sm">
              Follow <GoPlus />
            </span>
          </button>
          <button className="border-primary border bg-[#2d4471] w-32 h-7 rounded-full">
            <span className="flex items-center gap-1 justify-center text-primary text-sm">
              {" "}
              Chat <IoChatboxEllipsesOutline />
            </span>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="col-span-4 col-start-4">
        <div className="bg-mainfg w-full h-full rounded-lg px-8 py-3">
          <div className="flex items-center justify-between">
            {/* row 1 */}
            <div className="flex flex-col items-center  gap-3">
              <span className="flex text-white items-center text-sm gap-3">
                <AiOutlineUserAdd size={16} color="#6b6969" />
                following:{" "}
                <span className="text-current text-sm font-semibold">15k</span>
              </span>
              <span className="flex text-white items-center text-sm gap-3">
                <AiOutlineUserAdd size={16} color="#6b6969" />
                following:{" "}
                <span className="text-current text-sm font-semibold">15k</span>
              </span>
              <span className="flex text-white items-center text-sm gap-3">
                <AiOutlineUserAdd size={16} color="#6b6969" />
                following:{" "}
                <span className="text-current text-sm font-semibold">15k</span>
              </span>
            </div>
            {/* row2 */}
            <div className="flex flex-col items-center gap-3">
              <span className="flex text-white items-center text-sm gap-3">
                <AiOutlineUserAdd size={16} color="#6b6969" />
                following:{" "}
                <span className="text-current text-sm font-semibold">
                  15k
                 
                </span>
              </span>
              <span className="flex text-white items-center text-sm gap-3">
                <AiOutlineUserAdd size={16} color="#6b6969" />
                following:{" "}
                <span className="text-current text-sm font-semibold">15k</span>
              </span>
              <span className="flex text-white items-center text-sm gap-3">
                <AiOutlineUserAdd size={16} color="#6b6969" />
                following:{" "}
                <span className="text-current text-sm font-semibold">15k</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-8">
        <div className="bg-green cursor-pointer w-full h-full rounded-lg flex flex-col justify-center text-center p-2">
          <span className="flex flex-col items-center gap-2 text-white text-xs ">
            <p>Best safter of the yaer</p>
            <BiLike size={18} />
          </span>
        </div>
      </div>
      <div className="col-start-9">
        <div className="bg-green  cursor-pointer w-full h-full rounded-lg flex flex-col justify-center text-center p-2">
          <span className="flex flex-col items-center gap-2 text-white text-xs ">
            <p>Best safter of the yaer</p>
            <BiLike size={18} />
          </span>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-4 md:row-start-2 flex gap-10">
        <div className="bg-mainfg w-full h-full rounded-lg grid grid-cols-3 md:grid-cols-5 justify-center place-items-center gap-11 px-4">
          {ListShop.map((item) => (
            <div
              key={item.title}
              className="md:border-base-75 md:border-r-2 cursor-pointer flex h-8 items-center gap-2 last:border-none"
            >
              <span>{item.icon}</span>
              <p className="text-sm  text-white pr-3">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//
const ListShop = [
  { icon: <BiLogoInstagramAlt size={20} color="#6b6969" />, title: "02356488" },
  {
    icon: <BiLogoInstagramAlt size={20} color="#6b6969" />,
    title: "@gmail.cpm",
  },
  { icon: <BiLogoInstagramAlt size={20} color="#6b6969" />, title: "mvbsgop" },
  { icon: <BiLogoInstagramAlt size={20} color="#6b6969" />, title: "mvghsgdg" },
  {
    icon: <BiLogoInstagramAlt size={20} color="#6b6969" />,
    title: "relitiveshop",
  },
];
export default MawarShop;
