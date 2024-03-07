import React, { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const squaredValue = useMemo(() => {
    console.log("squared value is");
    return number * number;
  }, [number]);
  return (
    <>
      <p>number: {number}</p>
      <p>{squaredValue}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
export default UseMemo;
