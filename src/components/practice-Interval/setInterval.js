import React from "react";
import { useState } from "react";

export const Interval = () => {
  const [count, setCount] = useState(0);
  //   const handleInterval = () => {
  //     setInterval(() => {
  //       setCount((count) => count + 5);
  //     }, 1000);
  //     };
  const handleInterval = () => {
    setTimeout(() => {
      setCount((count) => count + 5);
    }, 1000);
  };
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={handleInterval}> Increment</button>
    </>
  );
};
