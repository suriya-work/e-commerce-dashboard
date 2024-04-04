import { CiShop } from "react-icons/ci";
import butty from "../../../public/images/butty.jpg";
import { GoPlus } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
const MawarShop = () => {
  return (
    <div className="grid grid-cols-9 grid-rows-2 gap-4 py-5 px-5">
      <div className="col-span-3 row-span-2 bg-mainfg rounded-md w-full h-full ">
        <div className="flex items-center justify-center mt-4">
          <img src={butty} alt="" className="w-72 h-28 rounded-md" />
        </div>
        <div className="flex items-center justify-between px-10 py-3">
          <span className="flex items-center gap-1 text-white">
            <CiShop />
            <p className="text-sm">Mawar shop official</p>
          </span>
          <p className="text-green text-sm">. Online</p>
        </div>
        <div className="flex items-center justify-between px-7 py-3">
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
      <div className="col-span-4 col-start-4">2</div>
      <div className="col-start-8">3</div>
      <div className="col-start-9">4</div>
      <div className="col-span-6 col-start-4 row-start-2">5</div>
    </div>
  );
};

export default MawarShop;
