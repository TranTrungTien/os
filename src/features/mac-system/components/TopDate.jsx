import { useEffect, useState } from "react";
const getFormatted = () => {
  const currentDate = new Date();
  return currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
const TopDate = () => {
  const [date, setDate] = useState(getFormatted());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(getFormatted());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{date}</div>;
};

export default TopDate;
