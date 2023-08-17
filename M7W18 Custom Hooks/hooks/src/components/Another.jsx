import React from "react";
import useEverything from "../hooks/useEverything";

const Another = () => {
  const {state, increment, decrement} = useEverything();
  return (
    <div>
      <h1>This is another Component with another counter</h1>
      <p>The count is: {state.counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default Another;
