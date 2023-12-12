import { createRef } from "react";

const Uncontrolled = () => {
  const emailRef = createRef();
  const passRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(passRef.current.value);

    const userDetails = {
      username: emailRef.current.value,
      password: passRef.current.value,
    };
    
    // console.log(userDetails);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        // {
        // username: "kminchelle",
        // password: "0lelplR",
        // // expiresInMins: 60, // optional
        // }
        userDetails
      ),
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.message) {
          alert(resp.message);
        } else {
          alert("login success");
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
        }
      });
  };
  return (
    <>
      <h2>Uncontrolled component</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref={passRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Uncontrolled;
