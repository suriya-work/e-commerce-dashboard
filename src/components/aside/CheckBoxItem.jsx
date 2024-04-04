const CheckBoxItem = ({ item }) => {
  return (
    <div className="flex items-center gap-2 text-base-50">
      <input
        type="checkbox"
        className="h-3 w-3 appearance-none rounded-sm bg-mainfg text-primary focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0"
      />
      <span className="text-xs text-base-75">{item}</span>
    </div>
  );
};

export default CheckBoxItem;
