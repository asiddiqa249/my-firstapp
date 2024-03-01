import { useRef } from "react";

export const Validation = () => {
  const Input = useRef();
  const Input1 = useRef();
  const handleValid = () => {
    let x = Input.current.value;
    let y = Input1.current.value;
    // console.log(y)
    if (x > y) {
      console.log(x);
    } else {
      console.log(y);
    }
  };
  return (
    <>
      <input type="text" ref={Input} />
      <input type="text" ref={Input1} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleValid}> Validation </button>
      </div>
    </>
  );
};
