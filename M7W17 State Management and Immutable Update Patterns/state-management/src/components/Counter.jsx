import { useState } from "react";

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState("");
  // const [counter, setCounter] = useState(true);
  const [counter, setCounter] = useState({
    num: 0,
    message: "Hello, how are you?"
  });
  const [arr, setArr] = useState([]);
  const decrement = () => {
    setArr((prev) => {
      // const newArr = prev.splice()
      return [...prev, 1];
    })
  }

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter("HOw are you?");
    // setCounter(false);
    setCounter((prev) => {
      console.log(prev);
      return {
        ...prev,
        // num: 0,
        // message: "Hello, how are you?"
        message: "New message!",
        num: prev.num + 1
      }
    })
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <p>The count is: {counter.num}</p>
      <p>The message is: {counter.message}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        {arr.map((num) => <p>{num}</p>)}
      </div>
    </div>
  )
}

export default Counter;