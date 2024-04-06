const ListTollBar = [
  { title: "AllProducts" },
  { title: "Top sales" },
  { title: "Promo" },
  { title: "La Crystall" },
  { title: "Cleanizer" },
  { title: "EiTonerb" },
  { title: "Serump" },
  { title: "More" },
];

export default function TollBars() {
  return (
    <div className="container md:flex hidden">
      <div className="border-mainfg border-b-2 w-full flex gap-20 ">
        {ListTollBar.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-center py-3"
          >
            <p className="text-base-75 text-lg font-semibold hover:text-white">
              {item.title}
            </p>
            </div>
        ))}
      </div>
    </div>
  );
}
