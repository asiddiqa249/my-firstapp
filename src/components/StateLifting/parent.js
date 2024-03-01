// ParentComponent.jsx
import React, { useState } from "react";
import ChildComponent from "./child";

const ParentComponent = () => {
  const [childData, setChildData] = useState(null);

  const handleChildData = (dataFromChild) => {
    // This function is passed as a prop to the child
    // and receives data from the child component
    setChildData(dataFromChild);
  };

  return (
    <div>
      <p>Data from Child: {childData}</p>
      <ChildComponent sendDataToParent={handleChildData} />
    </div>
  );
};

export default ParentComponent;
