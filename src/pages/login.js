import React, { useContext, useState } from "react";
import { LoginInfo } from "../navigationStack/navigationStack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const loginDetails = useContext(LoginInfo)
  console.log(loginDetails);
  const navigate=useNavigate()
  const [username, setUser] = useState("");
  // const [userError, setUserError] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      username: username,
      password: password,
    };
    console.log(details);
    axios.get("http://localhost:3001/posts")
      .then((res) => {
      console.log(res);
      const validateDetails = res.data.find(
        (val) => val.username === username && val.password === password
      );
      if (validateDetails) {
        alert("successfully logined user");
        loginDetails.signIn()
        navigate("/home");
      } else {
        alert("credentials are in valid please check");
      }
    });
  };
  const userHandler = (e) => {
    setUser(e.target.value);
    // if (e.target.value.length > 8) {
    //   setUserError("please enter username lessthan 8 characters");
    // } else {
    //   setUserError("");
    // }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    // const passFormat =
    //   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    // if (!passFormat.test(e.target.value)) {
    //   setPasswordError("Write the Strong password");
    // } else {
    //   setPasswordError("");
    // }
  };
  return (
    <div>
      <h1>LoginScreen</h1>
      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label
            htmlFor="inputUsername4"
            style={{ color: "black", fontSize: "18px" }}
          >
            Username
          </label>
          <input
            type="text"
            className="form-control border-black"
            placeholder="Username"
            value={username}
            onChange={userHandler}
          />
          {/* <label
            htmlFor="inputUsername4"
            style={{ color: "black", fontSize: "18px" }}
          >
            {userError}
          </label> */}
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label
            className="form-label"
            htmlFor="form2Example2"
            style={{ color: "black", fontSize: "18px" }}
          >
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control border-black"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
          />
          {/* <label className="form-label" htmlFor="form2Example2" style={{ color: "black", fontSize: "18px" }}>
            {passwordError}
          </label> */}
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
}
export default LoginScreen;
