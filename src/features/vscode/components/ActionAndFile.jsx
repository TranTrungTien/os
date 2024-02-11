import FileManagement from "./FileManagment";
import PropTypes from "prop-types";

const tabsIcon = [
  "src/assets/images/vscode/files.svg",
  "src/assets/images/vscode/search.svg",
  "src/assets/images/vscode/debug.svg",
  "src/assets/images/vscode/debug-alt.svg",
  "src/assets/images/vscode/extensions.svg",
];

const ActionAndFile = ({ onChangeFile }) => (
  <div className="flex bg-[#181818] h-full flex-1">
    <aside className="sidebar w-11 flex flex-col border-l border-solid border-[#2b2b2b] py-2">
      <div className="top-items w-full flex-1 flex flex-col items-center gap-y-px">
        {tabsIcon.map((item) => (
          <div key={item} className="w-full h-12 grid place-content-center">
            <img src={item} alt="" width={22} height={22} />
          </div>
        ))}
      </div>
    </aside>
    <FileManagement onChangeFile={onChangeFile} />
  </div>
);

export default ActionAndFile;

ActionAndFile.propTypes = {
  onChangeFile: PropTypes.func,
};
