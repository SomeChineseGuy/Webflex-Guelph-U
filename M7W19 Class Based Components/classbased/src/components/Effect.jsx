import React, { useEffect, useState } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);


  useEffect(() => {
    console.log('inside the useEffect');
    setCounter(counter + 1)
  }, [])

  // useEffect(() => {
  //   console.log('inside the useEffect');
  // }, [])
  
  // useEffect(() => {
  //   console.log('inside the useEffect');
  // }, [counter])

  console.log('fire');

  

  const increment = () => {
    
    setCounter(counter + 1);
  }

  const increment2 = () => {
    setCounter2(counter2 + 1);
  }

  return (
    <div>
      <p>The count: {counter}</p>
      <p>The count: {counter2}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={increment2}>Increment 2</button>
    </div>
  )
};

export default Effect;
