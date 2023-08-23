import './App.css';
import Effect from './components/Effect';
// import ClassBased from './components/ClassBased';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my App!</h1>
      {/* <ClassBased message="Can you see this?" /> */}
      {/* <LifeCycle /> */}
      <Effect />
    </div>
  );
}

export default App;
