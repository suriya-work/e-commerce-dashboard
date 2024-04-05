import { CiShop } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import MawarShop from "../mawar/MawarShop";
const Home = () => {
  return (
    <div className="col-span-8 ml-7 py-5 ">
      <div className="flex md:gap-4 ">
        <span className="flex items-center gap-2 text-base-75">
          <p>Home</p>
          <IoIosArrowForward />
        </span>
        <span className="flex items-center gap-2 text-base-75">
          <p>Cleanizer</p>
          <IoIosArrowForward />
        </span>
        <span className="flex items-center gap-2 text-white">
          <CiShop />
          <p>Mawar shop official</p>
        </span>
      </div>
      {/* mawar */}
      <MawarShop />
    </div>
  );
};

export default Home;
