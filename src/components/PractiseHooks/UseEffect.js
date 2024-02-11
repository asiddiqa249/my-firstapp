import axios from "axios";
import React, { useEffect, useState } from "react";
const UseEffect = () => {
//   const [data, setData] = useState([]);
const [count,setCount]=useState(0)
  useEffect(() => {
      handleLoad();
  }, []);

  const handleLoad = () => {
    // axios
    //   .get("https://fakestoreapi.com/products/")
    //   .then((res) => setData(res.data));
    setCount(count+1)
  };
  return (
    <>
          <h1>count: {count}</h1>
      {/* <div>
        {data.length > 0 ? 
        (
          data.map((ele) => {
            return (
              <div key={ele.id}>
                <div>
                  <img src={ele.image} alt=".." style={{width:"100px",height:"100px"}} />
                  <p>{ele.title}</p>
                </div>
              </div>
            );
          })
        ) : (<h2>no products</h2>)}
      </div> */}
      <button onClick={handleLoad}>increment</button>
    </>
  );
};
export default UseEffect;
