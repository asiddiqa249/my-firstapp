import { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassswordError] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const[address,setAddress]=useState("")
  const[addressError,setAddressError]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      username: user,
      email: email,
      password: password,
      confirmPassword: confirmPass,
      gender:gender,
      address:address,
    };
    console.log(details);
    fetch("https://dummyjson.com/users", {
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
    // localStorage.setItem("userDetails",JSON.stringify(details))
  };
  const userHandler = (e) => {
    setUser(e.target.value);
    // console.log(e.target.value);
    if (e.target.value.length > 8) {
      setUserError("please enter username lessthan 8 characters");
    } else {
      setUserError("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const format = /^[\w]+@[\w]+\.[\w]+$/;
    if (!format.test(e.target.value)) {
      setEmailError("In valid Email Formate");
    } else {
      setEmailError("");
    }
  };
  const passHandler = (e) => {
    setPassword(e.target.value);
    const passFormat =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (!passFormat.test(e.target.value)) {
      setPassswordError("Write the Strong password");
    } else {
      setPassswordError("");
    }
  };
  const confirmPassHandler = (e) => {
    setConfirmPass(e.target.value);
    const cPFormat =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (!cPFormat.test(e.target.value)) {
      setConfirmPassError("Confirm password is not same as password");
    } else {
      setConfirmPassError("");
    }
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
    if (!e.target.value) {
      setGenderError("validate gender");
    } else {
      setGenderError("");
    }
  };
  const addressHandler=(e)=>{
    setAddress(e.target.value)
      if (!e.target.value) {
        setAddressError("Fill the address")
      } else {
          setAddressError("")
    }
  }
  return (
    <>
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-row">
            <div className="col">
              <label
                htmlFor="inputUsername4"
                style={{ color: "black", fontSize: "18px" }}
              >
                Username
              </label>
              <input
                type="text"
                className="form-control w-50 border-black"
                placeholder="First name"
                value={user}
                onChange={userHandler}
              />
              <label htmlFor="inputUsername4" style={{ color: "red" }}>
                {userError}
              </label>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label
              htmlFor="inputEmail4"
              style={{ color: "black", fontSize: "18px" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control border-black"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              onChange={emailHandler}
            />
            <label htmlFor="inputEmail4" style={{ color: "red" }}>
              {emailError}
            </label>
          </div>
          <div className="form-group col-md-6">
            <label
              htmlFor="inputPassword4"
              style={{ color: "black", fontSize: "18px" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control border-black"
              placeholder="Password"
              value={password}
              onChange={passHandler}
            />
            <label htmlFor="inputPassword4" style={{ color: "red" }}>
              {passwordError}
            </label>
          </div>
          <div className="form-group col-md-6">
            <label
              htmlFor="inputPassword4"
              style={{ color: "black", fontSize: "18px" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control border-black"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={confirmPassHandler}
            />
            <label htmlFor="inputPassword4" style={{ color: "red" }}>
              {confirmPassError}
            </label>
          </div>
        </div>
        <>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input border-black"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              defaultValue="option1"
              value="Male"
              onChange={genderHandler}
              required
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input border-black"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              defaultValue="option2"
              value="Female"
              onChange={genderHandler}
              required
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input border-black"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              defaultValue="option3"
              disabled=""
              value="Other"
              onChange={genderHandler}
              required
            />
            <label style={{ color: "red" }}>{genderError}</label>
            <label className="form-check-label" htmlFor="inlineRadio3">
              Other
            </label>
          </div>
        </>

        <div className="form-row">
          <div className="form-row">
            <div className="form-group col-md-4">
              <label
                htmlFor="inputState"
                style={{ color: "black", fontSize: "18px" }}
              >
                State
              </label>
              <select
                id="inputState"
                className="form-control border-black w-50"
                value={address}
                onChange={addressHandler}
                required
              >
                <option value="">Choose state</option>
                <option>Telangana</option>
                <option>Andhra Pradesh</option>
                <option>Hyderabad</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
                <option>Maharashtra</option>
              </select>
              <label style={{ color: "red" }}>{addressError}</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
};
export default Registration;
