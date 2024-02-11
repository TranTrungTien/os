const Dropdown = () => {
  return (
    <div className="invisible text-sm absolute z-50 left-0 top-0 translate-y-7 w-40 flex rounded-md flex-col bg-gray-100 py-1 px-4 text-black shadow-xl group-hover:visible">
      <div className="whitespace-nowrap block border-b border-solid border-gray-200 py-1 font-medium">
        Product One
      </div>

      <div className="whitespace-nowrap block border-b border-solid border-gray-200 py-1 font-medium">
        Product Two
      </div>
      <div className="whitespace-nowrap block border-b border-solid border-gray-200 py-1 font-medium">
        Product Three
      </div>
      <div className="whitespace-nowrap block border-b border-solid border-gray-200 py-1 font-medium">
        Product Four
      </div>
    </div>
  );
};

export default Dropdown;
