import PropTypes from "prop-types";
import VSCode from "../../vscode";

const apps = [
  {
    icon: "src/assets/images/system/FaceTime.svg",
    id: "facetime",
    app: null,
  },
  {
    icon: "src/assets/images/system/Folder.svg",
    id: "folder",
    app: null,
  },
  {
    icon: "src/assets/images/system/Mail.svg",
    id: "mail",
    app: null,
  },
  {
    icon: "src/assets/images/system/Maps.svg",
    id: "maps",
    app: null,
  },
  {
    icon: "src/assets/images/system/Music.svg",
    id: "music",
    app: null,
  },
  {
    icon: "src/assets/images/system/Reminders.svg",
    id: "reminders",
    app: null,
  },
  {
    icon: "src/assets/images/system/Safari.svg",
    id: "safari",
    app: null,
  },
  {
    icon: "src/assets/images/system/Vscode.png",
    id: "vscode",
    app: VSCode,
  },
];

const Tabbar = ({ onSelectApp }) => {
  return (
    <div className="absolute left-0 right-0 z-[1] mx-auto text-center bottom-8 w-11/12 rounded-lg h-11 bg-white/[.48]">
      <div className="flex justify-center items-center h-full gap-x-2">
        {apps.map((item, index) => (
          <img
            className="cursor-pointer"
            onClick={() => onSelectApp(item)}
            key={index}
            alt=""
            src={item.icon}
            width={40}
            height={40}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabbar;

Tabbar.propTypes = {
  onSelectApp: PropTypes.any,
};
