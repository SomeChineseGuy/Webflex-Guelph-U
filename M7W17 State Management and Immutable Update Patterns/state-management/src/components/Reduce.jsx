import { useReducer, useState } from "react";

const Reduce = () => {
  const initialState = {
    count: 0,
    userName: "Alvin",
    isLoggin: false,
    userData: [],
    userValues: {}
  }

  const reduce = (state, action) => {
    if(action.type === 'increment') {
      return {
        ...state,
        count: state.count + 1
      }
    }
    if(action.type === 'decrement') {
      return {
        ...state,
        count: state.count - 1
      }
    }
    if(action.type === 'addData') {
      console.log(state);
      return {
        ...state,
        userData: [...state.userData, state.count]
      }
    }
    if(action.type === 'usernameJoe') {
      return {
        ...state,
        userName: 'Joe'
      }
    }
    if(action.stuff === 'usernameAlvin') {
      console.log(action.num);
      return {
        ...state,
        userName: 'Alvin',
        count: action.num
      }
    }
  } 

  const [state, dispatch] = useReducer(reduce, initialState)

  const increase = () => {
    dispatch({type: 'increment'})
  }

  const decrement = () => {
    dispatch({type: 'decrement'})
  }

  const addData = () => {
    dispatch({type: 'addData'})
  }

  const usernameJoe = () => {
    dispatch({type: 'usernameJoe'})
  }

  const usernameAlvin = () => {
    dispatch({stuff: 'usernameAlvin', num: 10})
  }
  

  const [counter, setCounter] = useState({})
  return (
    <div>
      <h1>This is the Reduce Component</h1>
      <h2>{state.userName}</h2>
      <p>The counter is : {state.count}</p>
      <div>
        <button onClick={increase}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={addData}>Add user data</button>
        <button onClick={usernameJoe}>Change username to Joe</button>
        <button onClick={usernameAlvin}>Change username to Alvin</button>
      </div>
      <div>
        {state.userData.map((ele) => <p>{ele}</p> )}
      </div>
    </div>
  )
}

export default Reduce;