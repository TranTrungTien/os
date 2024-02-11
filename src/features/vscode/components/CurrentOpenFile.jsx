import PropTypes from "prop-types";
import RenderFile from "./RenderFile";
import { allFiles } from "../../../constants";

const CurrentFileOpen = ({
  openingFile,
  filesSelected,
  onChangeFile,
  handleRemoveFile,
}) => {
  const handleSelectFile = (fileName) => {
    const file = allFiles.find((item) => item.name === fileName);
    onChangeFile(file);
  };

  return (
    <div className="flex items-center justify-start bg-[#181818] text-white shadow-lg">
      {filesSelected.map((file) => (
        <div
          onClick={() => handleSelectFile(file.name)}
          key={file.name}
          className={`cursor-pointer py-2 px-2 pr-6 border-r border-solid relative group border-[#2b2b2b] ${
            openingFile?.name === file?.name ? "bg-[#1e1e1e]" : ""
          }`}
        >
          <RenderFile
            {...file}
            isRemove
            handleRemoveFile={(e) => {
              e.stopPropagation();
              handleRemoveFile(file);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CurrentFileOpen;

CurrentFileOpen.propTypes = {
  handleRemoveFile: PropTypes.func,
  onChangeFile: PropTypes.func,
  openingFile: PropTypes.object,
  filesSelected: PropTypes.array,
};
