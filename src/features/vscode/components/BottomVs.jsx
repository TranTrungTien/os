const BottomVs = () => (
  <footer className="flex bg-[#181818] items-center justify-between border border-solid border-[#2b2b2b] text-[10px] text-gray-400 px-3 py-px">
    <div className="warning-status flex">
      <div className="status-bar-section">
        <i className="fas fa-times-circle"></i>0
      </div>
      <div className="status-bar-section">
        <i className="fas fa-exclamation-triangle"></i>0
      </div>
    </div>
    <div className="status-bar flex gap-x-2">
      <div className="status-bar-section">L 217, col 8</div>
      <div className="status-bar-section">Espaces : 4</div>
      <div className="status-bar-section">UTF-8</div>
      <div className="status-bar-section">CRLF</div>
      <div className="status-bar-section">HTML</div>
    </div>
  </footer>
);

export default BottomVs;
