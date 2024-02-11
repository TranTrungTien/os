import PropTypes from "prop-types";

const RenderFile = ({ name, icon, isRemove, handleRemoveFile }) => {
  return (
    <div className="flex gap-x-1 items-center py-px active">
      <span className="file-icon">
        <img width={12} src={icon} alt="html icon" />
      </span>
      <span className="text-xs flex-1 truncate">{name}</span>
      {isRemove && (
        <div
          onClick={handleRemoveFile}
          className="hover:bg-white/10 hidden group-hover:block absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-sm"
        >
          <img
            alt=""
            src="src/assets/images/vscode/chrome-close.svg"
            width={12}
            height={12}
          />
        </div>
      )}
    </div>
  );
};

export default RenderFile;

RenderFile.propTypes = {
  handleRemoveFile: PropTypes.func,
  name: PropTypes.string,
  icon: PropTypes.any,
  isRemove: PropTypes.bool,
};
