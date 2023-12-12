import { useState } from "react";

const Controlled = () => {
    const [userName, setUserName] = useState("")
    const[password,setPassword]=useState("")
    const [userNameError, setUserNameError] = useState("")
    const [passwordError, setPasswordError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            username: userName,
            password:password
        }
        console.log(details);
        
        fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            // {
            // username: "kminchelle",
            // password: "0lelplR",
            // // expiresInMins: 60, // optional
            // }
            details
          ),
        })
          .then((res) => res.json())
          .then((resp) => {
            if (resp.message) {
              alert(resp.message);
            } else {
              alert("login success");
              localStorage.setItem("userDetails", JSON.stringify(details));
            }
          });
    }
    

    const userNameHandler = (e) => {
        setUserName(e.target.value)
        if (e.target.value.length > 10) {
            alert("please enter valid username")
            setUserNameError("please enter valid username");
        } else {
            setUserNameError("")
        } 
    }

    const passwordHandler = (e) => {
      setPassword(e.target.value);
      if (e.target.value.length > 8) {
        alert("please enter valid password");
        setPasswordError("please enter valid password");
      } else {
        setPasswordError("");
      }
    };
    return (
      <>
        <h2>Controlled Component</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              value={userName}
              onChange={userNameHandler}
            />
            <label htmlFor="exampleInputEmail1" style={{ color: "red" }}>
              {userNameError}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={passwordHandler}
            />
            <label htmlFor="exampleInputPassword1" style={{color:"red"}} >{passwordError}</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
}
export default Controlled;