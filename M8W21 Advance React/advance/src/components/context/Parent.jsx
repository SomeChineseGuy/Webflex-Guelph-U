import React, { useState } from "react";
import Counter from "./Counter";
import Inbetween from "./Inbetween";
import CounterContext from "./CounterContext";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const contextObj = {
    counter, setCounter
  }

  return (
    <div>
      <h1>Parent</h1>
      <CounterContext.Provider value={contextObj} >
        <Counter />
        <Inbetween />
      </CounterContext.Provider> 
    </div>
  )
};

export default Parent;
