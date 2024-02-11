import PropTypes from "prop-types";
import ActionAndFile from "./components/ActionAndFile";
import CurrentFileOpen from "./components/CurrentOpenFile";
import VSEditor from "./components/Editor";
import TopVS from "./components/TopVs";
import BottomVs from "./components/BottomVs";
import { useState } from "react";
import { allFiles } from "../../constants";

const VSCode = ({ onFullScreen, onClose }) => {
  // "src/assets/images/vscode/settings.svg",
  const [openingFile, setOpeningFile] = useState(allFiles[0]);
  const [filesSelected, setFilesSelected] = useState(allFiles);

  const handleChangeFile = (file) => {
    setOpeningFile(file);
  };

  const handleSelectFile = (file) => {
    if (filesSelected.find((item) => item?.name === file?.name))
      return setOpeningFile(file);
    const files = [...filesSelected];
    files.unshift(file);
    setFilesSelected(files);
    setOpeningFile(file);
  };

  const handleRemoveFile = (file) => {
    const files = filesSelected.filter((item) => item?.name !== file?.name);
    setFilesSelected(files);
    setOpeningFile(files[0]);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <TopVS file={openingFile} onFullScreen={onFullScreen} onClose={onClose} />
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="flex flex-1 items-start justify-start"
      >
        <ActionAndFile onChangeFile={handleSelectFile} />
        <div className="flex flex-col h-full w-full">
          <CurrentFileOpen
            openingFile={openingFile}
            filesSelected={filesSelected}
            onChangeFile={handleChangeFile}
            handleRemoveFile={handleRemoveFile}
          />
          {openingFile ? (
            <VSEditor openingFile={openingFile} />
          ) : (
            <div className="w-full h-full bg-[#1f1f1f] text-white grid place-content-center">
              Select a file please
            </div>
          )}
        </div>
      </div>
      <BottomVs />
    </div>
  );
};

export default VSCode;

VSCode.propTypes = {
  onFullScreen: PropTypes.func,
  onClose: PropTypes.func,
};
