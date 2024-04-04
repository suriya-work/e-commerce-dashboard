import CheckBoxItem from "./CheckBoxItem";
// import { ListCategory } from "./ListCategory";
const CategoryList = [
  {
    title: "Category",
    List: ["Frontend", "Backend", "Design", "Ui Ux", "Figma"],
  },

  {
    title: "Price",
    List: ["High to low", "Low to high"],
  },
  {
    title: "Location",
    List: ["Iran", "Iran"],
  },
  {
    title: "Rating",
    List: ["Highest", "Lowest", "Lowest"],
  },
];

const Aside = () => {
  return (
    <div className=" border-mainfg border-r-2 h-full  w-full">
      <div className="flex flex-col gap-5">
        {CategoryList.map((category) => (
          <div key={category.title}>
            <h2 className="text-lg font-semibold text-white py-2">
              {category.title}
            </h2>
            <div className="flex flex-col gap-2">
              {category.List.map((item, index) => (
                <CheckBoxItem key={index} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <p className="text-2xl font-semibold text-white py-2">Category</p>
        <form className="flex flex-col gap-2">
          {CategoryList.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between text-base-50"
            >
              <label className="flex items-center gap-2  font-medium ">
                <input
                  type="checkbox"
                  className="h-4 w-4 appearance-none rounded-md bg-mainfg text-primary focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 "
                />
                {item.title}
              </label>
            </div>
          ))}
        </form> */}
      {/* Price */}
      {/* <p className="text-2xl font-semibold text-white py-2">Price</p>
        <form className="flex flex-col gap-2">
          {Price.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between text-base-50"
            >
              <label className="flex items-center gap-2  font-medium ">
                <input
                  type="checkbox"
                  className="h-4 w-4 appearance-none rounded-md bg-mainfg text-primary focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 "
                />
                {item.title}
              </label>
            </div>
          ))}
        </form> */}
      {/* Location */}
      {/* <p className="text-2xl font-semibold text-white py-2">Location</p>
        <form className="flex flex-col gap-2">
          {Location.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between text-base-50"
            >
              <label className="flex items-center gap-2  font-medium ">
                <input
                  type="checkbox"
                  className="h-4 w-4 appearance-none rounded-md bg-mainfg text-primary focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 "
                />
                {item.title}
              </label>
            </div>
          ))}
        </form> */}
      {/* Rating */}
      {/* <p className="text-2xl font-semibold text-white py-2">Rating</p>
        <form className="flex flex-col gap-2">
          {Rating.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between text-base-50"
            >
              <label className="flex items-center gap-2  font-medium ">
                <input
                  type="checkbox"
                  className="h-4 w-4 appearance-none rounded-md bg-mainfg text-primary focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 "
                />
                {item.title}
              </label>
            </div>
          ))}
        </form> */}
    </div>
  );
};

export default Aside;
