import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Counter = () => {
  const values = useContext(CounterContext);
  return (
    <div>
      <p>The count is {values.counter}</p>
    </div>
  )
};

export default Counter;
