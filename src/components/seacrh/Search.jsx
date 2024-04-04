import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <>
      <form className="relative">
        <div className="absolute left-2 top-2">
          <CiSearch className="text-white" size={18} />
        </div>
        <input
          type="text"
          required
          placeholder="Search..."
          className="h-8 md:w-[300px] w-[350px] items-center rounded-full text-white  pl-[30px] outline-none border-none bg-mainfg"
        />
      </form>
    </>
  );
};

export default Search;
