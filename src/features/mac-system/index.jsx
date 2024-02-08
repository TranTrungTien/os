import VSCode from "../vscode";
import Tabbar from "./components/Tabbar";
import Top from "./components/Top";

const SystemOS = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center overflow-hidden transition-all relative"
      style={{
        backgroundImage: "url(/images/system/app-background.jpg)",
      }}
    >
      <Top />
      <VSCode />
      {/* <Tabbar /> */}
    </div>
  );
};

export default SystemOS;
