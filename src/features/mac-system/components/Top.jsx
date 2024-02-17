import Dropdown from "./Dropdown";
import AppleIcon from "../../../assets/images/system/Apple.svg";
import SettingDashboard from "../../../assets/images/system/SettingDashboardIcon.svg";
import TopDate from "./TopDate";

const macOpt = [
  {
    line: true,
    text: "About This Mac",
  },
  {
    text: "System Preferences...",
  },
  {
    line: true,
    text: "App Store...",
  },
  {
    line: true,
    text: "Recent Items",
  },
  {
    line: true,
    text: "Force Quit...",
  },
  {
    text: "Sleep",
  },
  {
    text: "Restart...",
  },
  {
    line: true,
    text: "Shut Down...",
  },
  {
    text: "Lock Screen",
  },
  {
    text: "Log Out User...",
  },
];

const finderOpt = [
  {
    line: true,
    text: "About Finder",
  },
  {
    text: "Preferences",
  },
  {
    line: true,
    text: "Empty Trash",
  },
  {
    line: true,
    text: "Hide Finder",
  },
  {
    line: true,
    text: "Hide Others",
  },
  {
    text: "Show All",
  },
];

const fileOpt = [
  { text: "New Finder Window" },
  { text: "New Folder" },
  { text: "New Folder with Selection" },
  { text: "New Smart Folder" },
  { text: "New tab" },
  { text: "Open", line: true },
  { text: "Open With" },
  { text: "Print" },
  { text: "Close Window", line: true },
  { text: "Get Info" },
  { text: "Rename", line: true },
  { text: "Compress" },
  { text: "Duplicate" },
  { text: "Make Alias" },
  { text: "Quick Look" },
  { text: "Show Original" },
  { text: "Add to Sidebar" },
  { text: "Move to Trash" },
  { text: "Eject" },
  { text: "Find", line: true },
  { text: "Tags..." },
];

const editOpt = [
  {
    line: true,
    text: "Undo",
  },
  {
    text: "Redo",
  },
  {
    line: true,
    text: "Cut",
  },
  {
    line: true,
    text: "Copy",
  },
  {
    line: true,
    text: "Paste",
  },
  {
    text: "Select All",
  },
  {
    text: "Show Clipboard",
  },
  {
    text: "Start Dictation...",
  },
  {
    text: "Emoji & Symbols",
  },
];

const viewOpt = [
  { text: "As Icons" },
  { text: "As List" },
  { text: "As Columns" },
  { text: "As Gallery", line: true },
  { text: "Use Stacks" },
  { text: "Sort By" },
  { text: "Clean Up" },
  { text: "Clean Up By", line: true },
  { text: "Hide Sidebar" },
  { text: "Show Preview" },
  { text: "Hide Toolbar" },
  { text: "Show All Tabs", line: true },
  { text: "Show Tab Bar" },
  { text: "Show Path Bar" },
  { text: "Show Status Bar" },
  { text: "Customize Toolbar..." },
  { text: "Show View Options" },
  { text: "Show Preview Options" },
  { text: "Enter Full Screen" },
];

const goOpt = [
  { text: "Show Preview", line: true },
  { text: "Hide Toolbar" },
  { text: "Show All Tabs" },
  { text: "Show Tab Bar", line: true },
  { text: "Show Path Bar" },
];

const windowOpt = [
  { text: "Show All Tabs", line: true },
  { text: "Show Tab Bar" },
  { text: "Show Path Bar" },
];

const helpOpt = [
  { text: "Show Preview Options", line: true },
  { text: "Enter Full Screen" },
];

const Top = () => {
  const optionsLeft = [
    {
      text: "",
      icon: AppleIcon,
      options: macOpt,
    },
    { text: "Finder", options: finderOpt },
    { text: "File", options: fileOpt },
    { text: "Edit", options: editOpt },
    { text: "View", options: viewOpt },
    { text: "Go", options: goOpt },
    { text: "Window", options: windowOpt },
    { text: "Help", options: helpOpt },
  ];
  const optionsRight = [
    { text: "", icon: SettingDashboard },
    { text: <TopDate /> },
  ];
  return (
    <div className="w-full h-7 bg-[rgba(27,27,29,0.3)]">
      <div className="flex justify-between items-center h-full">
        <div className="flex justify-start items-center px-1 h-full">
          {optionsLeft.map((item) => (
            <div
              className="relative group cursor-pointer self-stretch px-3"
              key={item.text}
            >
              {item?.icon ? (
                <img
                  src={item?.icon}
                  className="align-middle inline-block"
                  alt=""
                  width={19}
                  height={19}
                />
              ) : null}
              <span className="text-xs font-semibold text-white leading-7">
                {item.text}
              </span>
              <Dropdown options={item?.options} />
            </div>
          ))}
        </div>
        <div className="flex justify-start items-center px-1 h-full">
          {optionsRight.map((item) => (
            <div key={item.text} className="relative group cursor-pointer px-3">
              {item?.icon ? (
                <img src={item?.icon} alt="" width={13} height={13} />
              ) : null}
              <span className="text-xs font-semibold text-white leading-7">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
