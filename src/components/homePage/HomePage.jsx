import Aside from "../aside/Aside";
import Home from "./Home";

const HomePage = () => {
  return (
    <div className="container grid grid-cols-5 grid-rows-7">
          <Aside />
          <Home />
    </div>
  );
};

export default HomePage;
