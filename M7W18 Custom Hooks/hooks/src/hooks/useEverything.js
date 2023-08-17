import { useState } from "react";

const useEverything = () => {
  const [state, setState] = useState({
    counter: 0,
    text: ""
  })

  const increment = () => {
    setState((prev) => {
      return {
        ...prev,
        counter: prev.countr + 1
      }
    });
  }

  const decrement = () => {
    setState((prev) => {
      return {
        ...prev,
        counter: prev.counter - 1
      }
    })
  }

  const updateText = (e) => {
    setState(prev => {
      return {
        ...prev,
        text: e.target.value
      }
    })
  }

  return {
    state,
    increment,
    decrement,
    updateText
  }
}

export default useEverything;