import { useState } from "react";
import ModalDraggable from "../../components/ModalDraggable";
import Tabbar from "./components/Tabbar";
import Top from "./components/Top";

const SystemOS = () => {
  const [apps, setApps] = useState([]);

  const handleSelectApp = (app) => {
    if (!app?.app) return alert("App is still developing ..............");
    if (apps.find((item) => item?.id === app.id))
      return alert("App instance is running ..............");
    setApps(apps.concat(app));
  };
  const handleCloseApp = (id) => {
    const appsStillOpening = apps.filter((app) => app.id !== id);
    setApps(appsStillOpening);
  };

  const handleFullScreen = (id) => {
    const appsFullScreen = apps.map((app) => {
      return {
        ...app,
        isFullScreen: app.id === id && !app?.isFullScreen,
      };
    });
    setApps(appsFullScreen);
  };
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center overflow-hidden relative flex flex-col"
      style={{
        backgroundImage: "url(/images/system/app-background.jpg)",
      }}
    >
      <Top />
      <div className="flex-1 relative">
        {apps.map((item) => {
          const App = item?.app;
          return (
            <ModalDraggable
              isFullScreen={item?.isFullScreen}
              onClose={handleCloseApp}
              key={item?.id}
            >
              <App onFullScreen={handleFullScreen} onClose={handleCloseApp} />
            </ModalDraggable>
          );
        })}
        <Tabbar onSelectApp={handleSelectApp} />
      </div>
    </div>
  );
};

export default SystemOS;
