import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  // const dataFromApp = useContext(UserContext)
    const navStyle = {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        
    }
    const listStyle = {
        margin: "1%",
    }
    const ulStyle = {
      border: "2px solid black",
      borderRadius: "10px",
      marginTop: "5px",
      marginBottom: "5px",
      backgroundColor:"#e3f2fd"
    };
    return (
      <>
        <ul className="nav nav-pills navbar-light" style={ulStyle}>
          <li className="nav-item" style={listStyle}>
            <Link style={navStyle} to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link style={navStyle} to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link style={navStyle} to={"/settings"}>
              Settings
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* {dataFromApp} */}
          </li>
        </ul>
      </>
    );
}
export default Navbar