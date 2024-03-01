// ChildComponent.jsx
import React from "react";

const ChildComponent = (props) => {
  const sendDataToParent = () => {
    // This function, when invoked, passes data to the parent
    props.sendDataToParent("Data sent from Child to Parent!");
  };

  return (
    <div>
      <p>Child Component</p>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
