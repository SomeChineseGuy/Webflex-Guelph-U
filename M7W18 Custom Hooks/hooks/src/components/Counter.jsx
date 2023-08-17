import { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter(counter + 1)
  // }
  // const decrement = () => {
  //   setCounter(counter - 1)
  // }

  // const {counter, increment, decrement} = useCounter();
  const [counter, decrement, increment] = useCounter();
  const [counter2, decrement2, increment2 ] = useCounter();

  console.log(counter);
  // $('counter').val() === 140, 139, 138
  // const num = 10;
  return(
    <div>
      <h1>This is my Counter Component</h1>
      <p>The count is: {counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <p>The second count is: {counter2}</p>
      <div>
        <button onClick={increment2}>Increment</button>
        <button onClick={decrement2}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;