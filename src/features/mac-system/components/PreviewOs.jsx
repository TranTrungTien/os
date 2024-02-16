import PropTypes from "prop-types";
import "../style/preview.css";
import { useEffect } from "react";
import Loading from "./Loading";
const PreviewOs = ({ onNextScreen }) => {
  useEffect(() => {
    setTimeout(() => {
      onNextScreen(3);
    }, 3000);
  }, []);

  return (
    <div className="preview-container relative">
      <Loading />
      <div className="sun__container">
        <div className="sun"></div>
      </div>
    </div>
  );
};

export default PreviewOs;

PreviewOs.propTypes = {
  onNextScreen: PropTypes.func,
};
