const Tabbar = () => {
  const imageList = [
    "src/assets/images/system/FaceTime.svg",
    "src/assets/images/system/Folder.svg",
    "src/assets/images/system/Mail.svg",
    "src/assets/images/system/Maps.svg",
    "src/assets/images/system/Music.svg",
    "src/assets/images/system/Reminders.svg",
    "src/assets/images/system/Safari.svg",
  ];
  return (
    <div className="absolute left-0 right-0 mx-auto text-center bottom-8 w-11/12 rounded-lg h-11 bg-white/[.48]">
      <div className="flex justify-center items-center h-full gap-x-2">
        {imageList.map((item, index) => (
          <img key={index} alt="" src={item} width={40} height={40} />
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
