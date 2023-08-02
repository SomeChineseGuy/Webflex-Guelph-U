import { useState } from "react";


const Counter = (props) => {
  console.log(props);
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h2 >Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;