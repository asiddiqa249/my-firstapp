import axios from "axios";
import Navbar from "../../components/15_12_23/navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    const divStyle = {
      border: "2px solid black",
      borderRadius: "5px",
      margin: "1%",
      padding: "2%",
      width: "20rem",
      textAlign: "center",
      backgroundColor: "#e3f2fd",
      overflow: "hidden", 
      whiteSpace: "nowrap", 
      textOverflow: "ellipsis",
    };
    const mainDiv = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    alignContent:"center"
};

    const [data, setData] = useState([]);
    useEffect(() => {
        handleClick()
    },[])
  const handleClick = () => {
    // api
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  };
  
  return (
    <>
      <Navbar />
      {/* <div>
        <button onClick={}>Mens</button>
      </div> */}
      {/* <h2>Hello i'm home screen</h2> */}
      {/* <button onClick={handleClick}>See products</button> */}
      <div style={mainDiv}>
        {data.length > 0 ? (
          data.map((element) => {
            return (
              <div key={element.id}>
                <div style={divStyle}>
                  <img
                    src={element.image}
                    alt="..."
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                  <br />
                  <h5>{element.category}</h5>
                  <p>{element.title}</p>
                  <button
                    style={{
                      marginTop: "10px",
                      width: "40%",
                      padding: "1%",
                      borderRadius: "10px",
                      backgroundColor: "skyblue",
                      marginRight: "1%",
                    }}
                  >
                    <Link
                      to={`/product/${element.category}/${element.id}`}
                      style={{
                        textDecoration: "none",
                        fontSize: "1rem",
                        color: "black",
                        marginBottom: "1%",
                      }}
                    >
                      See More
                    </Link>
                  </button>
                  <button
                    style={{
                      marginTop: "10px",
                      width: "40%",
                      padding: "1%",
                      borderRadius: "10px",
                      backgroundColor: "skyblue",
                    }}
                  >
                    <Link
                      to={`/product/${element.category}/${element.id}`}
                      style={{
                        textDecoration: "none",
                        fontSize: "1rem",
                        color: "black",
                      }}
                    >
                      Add to cart
                    </Link>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h4>No products</h4>
        )}
      </div>
    </>
  );
};
export default HomeScreen;
