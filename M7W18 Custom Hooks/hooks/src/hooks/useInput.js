import { useState } from "react";

const useInput = (str) => {
  const [value, setValue] = useState(str);
  const updateText = (e) => {
    setValue(e.target.value);
  }

  return {
    value, onChange: updateText
  }
}

export default useInput;