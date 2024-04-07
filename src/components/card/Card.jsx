import { FaStar } from "react-icons/fa";
import TollBars from "../tollbar/TollBars";
import { ListProducts } from "./ListProducts";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-between gap-4 ">
      {/* flex flex-wrap justify-between */}
      {/* grid grid-cols-4 grid-rows-2 */}
      <TollBars />
      {ListProducts.map((item, index) => (
        <div
          key={index}
          className="bg-mainfg rounded-lg overflow-hidden md:w-64 "
        >
          <div className="relative">
            <div className="w-full h-32 rounded-md  bg-cover overflow-hidden">
              <img src={item.image} alt="image" />
            </div>
            <span className="absolute top-2 left-2 bg-mainfg w-10 h-5 rounded-2xl flex items-center justify-center text-xs text-white gap-1">
              <FaStar />
              {item.rating}
            </span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 text-white text-xs">
            <p>{item.title}</p>
            <span className="">${item.price}</span>
          </div>
          <div className="flex items-center justify-between px-3 pb-2">
            <p className="text-base-50 text-sm w-1/2">{item.description}</p>
            <button className="bg-primary hover:bg-[#2d4471]  rounded-full w-10 h-6 text-white flex items-center justify-center text-xs ">
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
