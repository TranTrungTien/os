import React from "react";
import Divider from "./Divider";
import PropTypes from "prop-types";

const Dropdown = ({ options }) => {
  return (
    <div className="backdrop-blur-xl invisible absolute z-50 left-0 top-full w-52 flex rounded-md flex-col border border-solid border-white/30 bg-[rgba(27,27,29,0.3)] py-1 text-white text-xs shadow-xl px-2 group-hover:visible">
      {options?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="whitespace-nowrap font-medium py-1 hover:bg-blue-500 rounded-md">
              <div className="px-2 font-light">{item?.text}</div>
            </div>
            {item?.line && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.array,
};
