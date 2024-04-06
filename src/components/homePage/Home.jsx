import { CiShop } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import MawarShop from "../mawar/MawarShop";
import Card from "../card/Card";
const Home = () => {
  return (
    <div className="col-span-8 md:ml-7 px-5 md:px-0 py-5 flex flex-col justify-center">
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
      <Card />
    </div>
  );
};

export default Home;
