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
    <div className=" md:border-mainfg md:border-r-2 h-full w-full pt-3 relative">
      <div className="flex flex-col gap-4 sticky top-10">
        {CategoryList.map((category) => (
          <div key={category.title}>
            <h2 className="text-lg font-semibold text-white py-2">
              {category.title}
            </h2>
            <div className="flex flex-col gap-3">
              {category.List.map((item, index) => (
                <CheckBoxItem key={index} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
