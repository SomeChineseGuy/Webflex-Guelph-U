import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/info', {replace: true});
  }
  return (
    <div>
      <h1>This is the single product page</h1>
      <h2>You are on {params.id}</h2>
      <form action="">
        <input type="text" />
        <button onClick={handleClick}>Click Me!</button>
      </form>
      
    </div>
  )
};

export default Product;
