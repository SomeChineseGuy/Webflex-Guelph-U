import React, { useState } from "react";
import useEverything from "../hooks/useEverything";

const Everything = () => {
  const {state, increment, decrement, updateText} = useEverything("https::www.getData.com");

  return (
    <div>
      <p>The Count is {state.counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <p>The Text is: {state.text}</p>
        <input type="text" value={state.text} onChange={updateText} />
      </div>
    </div>
  )
};

export default Everything;
