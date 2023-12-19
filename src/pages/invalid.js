import React from "react";
import { useNavigate } from "react-router-dom";
function InvalidScreen() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>InvalidScreen</h1>
      <button onClick={handleNavigate}>Return to home</button>
    </div>
  );
}
export default InvalidScreen;
