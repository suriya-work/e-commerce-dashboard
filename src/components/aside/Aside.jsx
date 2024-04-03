const Aside = () => {
  return (
      <div className="row-span-7 border-mainfg border-r-2 h-full">
      <div>
        <p className="text-2xl font-semibold text-white">Category</p>
        <form className="mt-5 flex flex-col gap-3">
          {CategoryList.map((item) => (
            <div key={item.title} className="flex items-center justify-between text-base-50">
              <label className="flex items-center gap-2  font-medium ">
                <input
                  type="checkbox"
                  className="h-4 w-4 appearance-none rounded-md bg-mainfg text-primary focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 "
                />
                {item.title}
              </label>
            </div>
          ))}
        </form>
          </div>
     
          
    </div>
  );
};
const CategoryList = [
  {
    title: "Frontend",
  },
  {
    title: "Backend",
  },
  {
    title: "Design",
  },
  {
    title: "Ui Ux",
  },
  {
    title: "Figma",
  },
];

export default Aside;
