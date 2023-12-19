import React, { useState } from "react";
function LoginScreen() {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      userName: user,
      password: password,
    };
    console.log(details);
    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(
    //     // {
    //     // username: "kminchelle",
    //     // password: "0lelplR",
    //     // // expiresInMins: 60, // optional
    //     // }
    //     details
    //   ),
    // })
    //   .then((res) => res.json())
    //   .then((resp) => {
    //     if (resp.message) {
    //       alert(resp.message);
    //     } else {
    //       alert("login success");
    //       localStorage.setItem("userDetails", JSON.stringify(details));
    //     }
    //   });
  };
  const userHandler = (e) => {
    setUser(e.target.value);
    if (e.target.value.length > 8) {
      setUserError("please enter username lessthan 8 characters");
    } else {
      setUserError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const passFormat =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (!passFormat.test(e.target.value)) {
      setPasswordError("Write the Strong password");
    } else {
      setPasswordError("");
    }
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
            value={user}
            onChange={userHandler}
          />
          <label
            htmlFor="inputUsername4"
            style={{ color: "black", fontSize: "18px" }}
          >
            {userError}
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2" style={{ color: "black", fontSize: "18px" }}>Password</label>
          <input type="password" id="form2Example2" className="form-control border-black" placeholder="Password" value={password} onChange={passwordHandler}/>
          <label className="form-label" htmlFor="form2Example2" style={{ color: "black", fontSize: "18px" }}>
            {passwordError}
          </label>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input border-black"
                type="checkbox"
                defaultValue=""
                id="form2Example31"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
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
