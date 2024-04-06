import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Home from "./components/homePage/Home";
const App = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[70px_1fr] bg-mainbg">
      <Header />
      <div className="container md:grid grid-cols-9 w-full">
        <div className="md:flex hidden">
          <Aside />
        </div>
        <Home />
      </div>
    </div>
  );
};

export default App;
