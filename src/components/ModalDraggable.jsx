import Draggable from "react-draggable";
import PropTypes from "prop-types";
// import { useState } from "react";

const zeroPosition = { x: 0, y: 0 };

const ModalDraggable = ({ children, isFullScreen }) => {
  // const [currentPosition, setCurrentPosition] = useState({
  //   pos: { x: 0, y: 0 },
  //   changed: false,
  // });
  const handleFullScreen = () => {
    if (!isFullScreen) return "w-3/4 h-[75vh] max-h-[75vh]";
    return "w-full h-[calc(100vh-24px)] max-h-[calc(100vh-24px)]";
  };
  // const handleSaveCurrentPosition = (e) => {
  //   setCurrentPosition({
  //     changed: true,
  //     pos: { x: e.pageX - e.offsetX, y: e.pageY - e.offsetY },
  //   });
  // };

  // const setPosition = () => {
  //   if (currentPosition.changed) return currentPosition.pos;
  //   return isFullScreen ? zeroPosition : undefined;
  // };
  return (
    <Draggable
      position={isFullScreen ? zeroPosition : undefined}
      bounds="parent"
      // onStop={handleSaveCurrentPosition}
    >
      <div
        style={{ position: "relative", zIndex: 2 }}
        className={handleFullScreen()}
      >
        {children}
      </div>
    </Draggable>
  );
};

export default ModalDraggable;

ModalDraggable.propTypes = {
  children: PropTypes.node,
  isFullScreen: PropTypes.bool,
};
