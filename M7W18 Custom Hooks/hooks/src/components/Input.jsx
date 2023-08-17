import { useState } from "react"
import useInput from "../hooks/useInput"

const Input = (props) => {
  // const [value, setValue] = useState("");
  // const updateText = (e) => {
  //   setValue(e.target.value);
  // }
  console.log(props.message);
  const {value, onChange} = useInput("")
  const inputStuff = useInput("")
  console.log(inputStuff);
  return (
    <div>
      <h1>This is the Input Component</h1>
      <input type="text" {...inputStuff}  />
      <p>You just typed: {inputStuff.value}</p>
    </div>
  )
}

export default Input