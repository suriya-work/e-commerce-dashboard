import { CiShop } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
  return (
    <div className="col-span-8 py-5">
      <div className="flex gap-4 pl-5">
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
    </div>
  );
};

export default Home;
