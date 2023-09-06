import React, { useContext } from "react";
import CounterContext from "./context/CounterContext";

const Products = () => {
  const values = useContext(CounterContext)
  const increment = () => {
    values.setCounter(values.counter + 1)
  }
  return (
    <div>
      <h1>Do you have any questions about our Products?</h1>
      <p>The count is {values.counter}</p>
      <p>{values.username}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
};

export default Products;
