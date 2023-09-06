import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Button = () => {
  const values = useContext(CounterContext);
  const increment = () => {
    values.setCounter(values.counter + 1)
  }
  return (
    <div>
      <button onClick={increment}>Click me</button>
    </div>
  )
};

export default Button;
