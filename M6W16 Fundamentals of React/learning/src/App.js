import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Cards from './components/Cards';
import Counter from './components/Counter';

function App() {
  const myName = "Alvin";
  const arr = ["Joe", "Steve"]

  const newArr = arr.map((names) => {
    return <p>{names}, how are you?</p>
  } )

  return (
    <div className="App">
      <Cards title="New info on Cars" info="Cars are awesome! They go super fast!" />
      <Counter onClick="On Click" />
      <Counter onClick="On Click" />
      <Counter onClick="On Click" />
      <Counter onClick="On Click" />
      <Cards title="New info on Trucks" info="Trucks are awesome! They go super fast!" />
      <Cards title="New info on Motorcycles" info="Motorcycles are awesome! They go super fast!" />

      {[
        <p>"Hello"</p>, 
        <p>"How are you"</p>, 
        <p>"Goodbye"</p>
      ]}

      {newArr}


      {/* <Hello message="Can you see this?" age={10} isSleep={true} />
      <Hello message="Something New" age={10} isSleep={true} />
      <Hello message="Something Else" age={10} isSleep={true} />
      {Hello({message:"I am here!", age: 20, isSleep: false})} */}
      {/* <p>Works like HTML AND JAVASCRIPT!!!</p>
      <p>2 + 2</p>
      <p>{myName}</p>
      <p>{2 + 2} </p> */}
    </div>
  );
}

export default App;
