import PropTypes from "prop-types";
import RestoreIcon from "../../../assets/images/vscode/chrome-restore.svg";
import MaximizeIcon from "../../../assets/images/vscode/chrome-maximize.svg";
import CloseIcon from "../../../assets/images/vscode/chrome-close.svg";

const chromeIcon = [
  {
    icon: RestoreIcon,
    action: "restore",
  },
  {
    icon: MaximizeIcon,
    action: "maximize",
  },
  {
    icon: CloseIcon,
    action: "close",
  },
];

const TopVS = ({ file, onFullScreen, onClose }) => {
  const handleAction = (action) => {
    if (action === "maximize") onFullScreen("vscode");
    else if (action === "close") onClose("vscode");
  };
  return (
    <div className="cursor-move bg-[#1e1e1e] flex justify-between items-center px-2 py-1 border border-solid border-[#2b2b2b]">
      <div className="logo px-1">
        <img
          width={22}
          src="src/assets/images/vscode/logo-vscode.svg"
          alt="logo-vscode"
        />
      </div>
      <div className="text-white text-xs">
        {file?.name} - Visual Studio Code
      </div>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="flex items-center gap-x-3 cursor-pointer"
      >
        {chromeIcon.map((item) => (
          <div
            key={item.action}
            className="h-full grid place-content-center"
            onClick={() => handleAction(item?.action)}
          >
            <img src={item.icon} alt="" width={16} height={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopVS;

TopVS.propTypes = {
  file: PropTypes.object,
  onFullScreen: PropTypes.any,
  onClose: PropTypes.any,
};
