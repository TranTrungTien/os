// import "./style/style.css";
import CodeEditor from "@uiw/react-textarea-code-editor";

const tabsIcon = [
  "src/assets/images/vscode/files.svg",
  "src/assets/images/vscode/search.svg",
  "src/assets/images/vscode/debug.svg",
  "src/assets/images/vscode/debug-alt.svg",
  "src/assets/images/vscode/extensions.svg",
];

const chromeIcon = [
  "src/assets/images/vscode/chrome-restore.svg",
  "src/assets/images/vscode/chrome-maximize.svg",
  "src/assets/images/vscode/chrome-close.svg",
];

const VSCode = () => {
  // "src/assets/images/vscode/settings.svg",
  return (
    <div className="flex flex-col w-full h-[calc(100vh-24px)] mt-6">
      <TopVS />
      <div className="flex-1 flex items-start justify-start">
        <ActionAndFile />
        <div className="flex flex-col #1f1f1f h-full w-full ">
          <main className="flex-1 bg-[#1f1f1f]">
            <CodeEditor
              // value={code}
              language="js"
              placeholder="Please enter JS code."
              // onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                backgroundColor: "#f5f5f5",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </main>
        </div>
      </div>
      <BottomVs />
    </div>
  );
};

export default VSCode;

const ActionAndFile = () => (
  <div className="flex bg-[#181818] h-full flex-1">
    <aside className="sidebar w-12 flex flex-col border-l border-solid border-[#2b2b2b] py-2">
      <div className="top-items w-full flex-1 flex flex-col items-center gap-y-2">
        {tabsIcon.map((item) => (
          <div key={item} className="w-full h-12 grid place-content-center">
            <img src={item} alt="" width={24} height={24} />
          </div>
        ))}
      </div>
      {/* 
            <div className="bottom-items">
              <div className="sidebar-item">
                <a href="#about">
                  <span className="sidebar-icon">
                    <i
                      className="fa-regular fa-circle-user"
                      title="Comptes"
                    ></i>
                  </span>
                </a>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon gear-icon">
                  <i className="fa-solid fa-gear" title="Gérer"></i>
                </span>
                <div className="settings">
                  <div className="theme-modal">
                    <div className="theme-vscode-name light">
                      Thème clair
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="theme-vscode-name dark">
                      Thème sombre
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="theme-vscode-name dracula">
                      Thème Dracula
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
    </aside>
    <FileManagement />
  </div>
);

const FileManagement = () => (
  <aside className="explorer text-white p-2 min-w-[160px] border-x border-solid border-[#2b2b2b]">
    <div className="uppercase flex items-center gap-x-1">
      <img
        src="src/assets/images/vscode/chevron-right.svg"
        alt=""
        width={16}
        height={16}
      />
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
      <ul className="file-list ml-1">
        <li className="py-px">
          <a
            href="#home"
            className="flex gap-x-1 items-center py-px ml-4 active aLink"
          >
            <span className="file-icon">
              <img
                width={12}
                src="src/assets/images/vscode/html.png"
                alt="html icon"
              />
            </span>
            <span className="text-xs">index.html</span>
          </a>
        </li>
        <li className="py-px">
          <a
            href="#about"
            className="flex gap-x-1 items-center py-px ml-4 aLink"
          >
            <span className="file-icon">
              <img
                width={12}
                src="src/assets/images/vscode/css_icon.svg"
                alt="css icon"
              />
            </span>
            <span className="text-xs">about.css</span>
          </a>
        </li>
        <li className="py-px">
          <a
            href="#skills"
            className="flex gap-x-1 items-center py-px ml-4 aLink"
          >
            <span className="file-icon">
              <img
                width={12}
                src="src/assets/images/vscode/javascript.svg"
                alt="js icon"
              />
            </span>
            <span className="text-xs">skills.js</span>
          </a>
        </li>
        <li className="py-px">
          <a
            href="#projects"
            className="flex gap-x-1 items-center py-px ml-4 aLink"
          >
            <span className="file-icon">
              <img
                width={12}
                src="src/assets/images/vscode/json_icon.svg"
                alt="json icon"
              />
            </span>
            <span className="text-xs">projets.json</span>
          </a>
        </li>
        <li className="py-px">
          <a
            href="#contact"
            className="flex gap-x-1 items-center py-px ml-4 aLink"
          >
            <span className="file-icon">
              <img
                width={12}
                src="src/assets/images/vscode/twig.svg"
                alt="twig icon"
              />
            </span>
            <span className="text-xs">contact.twig</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
);

const TopVS = () => (
  <div className="title-bar bg-[#2c2c32] flex justify-between items-center px-2 py-1 border border-solid border-[#2b2b2b]">
    <div className="logo">
      <img
        width={32}
        src="src/assets/images/vscode/logo-vscode.svg"
        alt="logo-vscode"
      />
    </div>
    <div className="text-white text-sm">
      index.html - Portfolio VSCode | SEBASTI Thomas - Visual Studio Code
    </div>
    <div className="flex items-center gap-x-3">
      {chromeIcon.map((item) => (
        <div key={item} className="h-full grid place-content-center">
          <img src={item} alt="" width={18} height={18} />
        </div>
      ))}
    </div>
  </div>
);

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
