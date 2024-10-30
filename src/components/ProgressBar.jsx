import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 5);
    }, 5);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
