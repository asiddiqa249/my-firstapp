import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
    const cardStyle = {
      border: "2px solid black",
      borderRadius: "5px",
      margin: "1%",
      padding: "1%",
      width: "36rem",
      textAlign: "center",
      backgroundColor: "#e3f2fd",
    };
    const urlId = useParams()
    // console.log(urlId)
    const [productDetail, setProductDetails] = useState({})
    useEffect(() => {
        handleProduct()
    },[])
    const handleProduct = () => {
        axios
          .get(`https://fakestoreapi.com/products/${urlId.id}`)
          .then((response) => setProductDetails(response.data));
    }
  return (
    <div>
      {/* <button onClick={handleProduct}>See Product</button> */}
      {Object.keys(productDetail).length > 0 && (
        <>
          <div style={cardStyle}>
            <h2>{productDetail.title}</h2>
            <h3>{productDetail.category}</h3>
            <img src={productDetail.image} alt={productDetail.title} />
            <p>{productDetail.description}</p>
            <h4> Price: ${productDetail.price}</h4>
          </div>
        </>
      )}
    </div>
  );
}
export default ProductDetail;
