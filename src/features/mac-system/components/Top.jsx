import Dropdown from "./Dropdown";
import AppleIcon from "../../../assets/images/system/Apple.svg";

const Top = () => {
  const optionsLeft = [
    { text: "", icon: AppleIcon },
    { text: "Finder" },
    { text: "File" },
    { text: "Edit" },
    { text: "View" },
    { text: "Go" },
    { text: "Window" },
    { text: "Help" },
  ];
  const optionsRight = [
    { text: "Finder" },
    { text: "File" },
    { text: "Edit" },
    { text: "View" },
    { text: "Go" },
    { text: "Window" },
    { text: "Help" },
  ];
  return (
    <div className="w-full h-6 bg-white/[.70] px-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-3">
          {optionsLeft.map((item) => (
            <div className="relative group cursor-pointer" key={item.text}>
              {item?.icon ? (
                <img src={item?.icon} alt="" width={22} height={22} />
              ) : null}
              <span className="text-sm">{item.text}</span>
              <Dropdown />
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center gap-x-3">
          {optionsRight.map((item) => (
            <div key={item.text}>
              {item?.icon ? (
                <img src={item?.icon} alt="" width={22} height={22} />
              ) : null}
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
