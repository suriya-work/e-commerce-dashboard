import { CiShop } from "react-icons/ci";
import butty from "../../../public/images/butty.jpg";
import { GoPlus } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
const MawarShop = () => {
  return (
    <div className="md:grid md:grid-cols-9 md:grid-rows-2 flex flex-col gap-3 py-5">
      <div className="col-span-3 row-span-2 bg-mainfg rounded-lg px-5 py-2">
        <div className="flex items-center justify-center mt-4">
          <img src={butty} alt="" className="w-full h-28 rounded-md" />
        </div>
        <div className="flex items-center justify-between  py-3">
          <span className="flex items-center gap-1 text-white">
            <CiShop />
            <p className="text-sm">Mawar shop official</p>
          </span>
          <p className="text-green text-sm">. Online</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <button className="bg-primary w-32 h-7 rounded-full">
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
        <div className="bg-mainfg w-full h-full rounded-lg"></div>
      </div>
      <div className="col-start-8">
        <div className="bg-green w-full h-full rounded-lg flex flex-col justify-center text-center p-2">
          <span className="flex flex-col items-center gap-2 text-white text-xs ">
            <p>Best safter of the yaer</p>
            <BiLike size={18} />
          </span>
        </div>
      </div>
      <div className="col-start-9">
        <div className="bg-green w-full h-full rounded-lg flex flex-col justify-center text-center p-2">
          <span className="flex flex-col items-center gap-2 text-white text-xs ">
            <p>Best safter of the yaer</p>
            <BiLike size={18} />
          </span>
        </div>
      </div>
      <div className="col-span-6 col-start-4 row-start-2">
        <div className="bg-mainfg w-full h-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default MawarShop;
