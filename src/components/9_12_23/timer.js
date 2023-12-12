import { useState } from "react";

const UseState2 = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const handleTimer = () => {
    if (!intervalId) {
      const newInterval = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);
      setIntervalId(newInterval);
    }
  };
  const stopTimer = () => {
      clearInterval(intervalId);
      setIntervalId(null);
    setTimer(0);
  };
  return (
    <>
      <h2>{timer}</h2>
      <button onClick={handleTimer}>Start timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
};
export default UseState2;
