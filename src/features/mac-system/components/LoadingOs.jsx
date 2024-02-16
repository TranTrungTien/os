import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../style/loading-os.css";

const LoadingOs = ({ onNextScreen }) => {
  const [delaying, setDelaying] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDelaying(false);
    }, 1500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      onNextScreen(2);
    }, 12000);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white p-2">
      <div className="vt323-regular">
        {!delaying && (
          <>
            <div className="flex items-center gap-x-2">
              <div>owner {">>:"}</div>
              <div className="typing-line-1">
                <p>Tran Trung Tien...</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>owner {">>:"}</div>
              <div className="typing-line-2">
                <p>The system is loading, waits some minutes...</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingOs;

LoadingOs.propTypes = {
  onNextScreen: PropTypes.func,
};
