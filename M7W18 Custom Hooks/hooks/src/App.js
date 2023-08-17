import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Input from './components/Input';
import { useState } from 'react';
import Everything from './components/Everything';
import Another from './components/Another';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>Welcome to my home page!</h1>
      <div>
        {/* <Counter /> */}
        {/* <Input message="Hello world" counter={counter} setCounter={setCounter}/> */}
        {/* <Input message="Goodbye World" /> */}
        <Everything />
        <Another />
      </div>
    </div>
  );
}

export default App;
