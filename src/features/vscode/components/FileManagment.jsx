import { allFiles } from "../../../constants";
import RenderFile from "./RenderFile";
import PropTypes from "prop-types";

import chevronRightIcon from "../../../assets/images/vscode/chevron-right.svg";

const FileManagement = ({ onChangeFile }) => {
  return (
    <aside className="explorer text-white p-2 min-w-[160px] border-x border-solid border-[#2b2b2b]">
      <div className="uppercase flex items-center gap-x-1">
        <img src={chevronRightIcon} alt="" width={16} height={16} />
        <span className="text-[11px]">Explore</span>
      </div>
      <div className="explorer-content">
        <div className="toggle-chevron text-[11px]"></div>
        <div className="uppercase flex items-center gap-x-1">
          <img
            src="src/assets/images/vscode/chevron-right.svg"
            alt=""
            width={16}
            height={16}
          />
          <span className="text-[11px]">PORTFOLIO</span>
        </div>
        <div className="file-list ml-1">
          {allFiles.map((file) => (
            <div
              onClick={() => onChangeFile(file)}
              key={file.name}
              className="py-px ml-4 cursor-pointer"
            >
              <RenderFile {...file} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FileManagement;

FileManagement.propTypes = {
  onChangeFile: PropTypes.func,
};
