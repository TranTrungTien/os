import PropTypes from "prop-types";
import VSCode from "../../vscode";
import FaceTimeIcon from "../../../assets/images/system/FaceTime.svg";
import FolderIcon from "../../../assets/images/system/Folder.svg";
import MailIcon from "../../../assets/images/system/Mail.svg";
import MapsIcon from "../../../assets/images/system/Maps.svg";
import MusicIcon from "../../../assets/images/system/Music.svg";
import RemindersIcon from "../../../assets/images/system/Reminders.svg";
import SafariIcon from "../../../assets/images/system/Safari.svg";
import VscodeIcon from "../../../assets/images/system/Vscode.png";

const apps = [
  {
    icon: FaceTimeIcon,
    id: "facetime",
    app: null,
  },
  {
    icon: FolderIcon,
    id: "folder",
    app: null,
  },
  {
    icon: MailIcon,
    id: "mail",
    app: null,
  },
  {
    icon: MapsIcon,
    id: "maps",
    app: null,
  },
  {
    icon: MusicIcon,
    id: "music",
    app: null,
  },
  {
    icon: RemindersIcon,
    id: "reminders",
    app: null,
  },
  {
    icon: SafariIcon,
    id: "safari",
    app: null,
  },
  {
    icon: VscodeIcon,
    id: "vscode",
    app: VSCode,
  },
];

const Docks = ({ onSelectApp }) => {
  return (
    <div className="absolute left-0 right-0 z-[1] mx-auto text-center bottom-8 w-11/12 rounded-lg h-11 bg-[rgba(83,_83,_83,_0.25)] border border-[rgba(83,_83,_83,_0.5)] border-solid backdrop-blur">
      <div className="w-max mx-auto h-full">
        <div className="flex justify-center items-center h-full gap-x-2 w-max">
          {apps.map((item, index) => (
            <div
              onClick={() => onSelectApp(item)}
              key={index}
              className={`li-${index + 1} group`}
            >
              <img
                className="cursor-pointer transition-all duration-300-500 group-hover:scale-150 group-hover:-translate-y-4"
                alt=""
                src={item.icon}
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docks;

Docks.propTypes = {
  onSelectApp: PropTypes.any,
};
