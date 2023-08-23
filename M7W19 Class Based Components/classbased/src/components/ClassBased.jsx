import React from "react";

// const ClassBased = (props) => {
// const [counter, setCounter] = useState(0)
// counter + 1
//   return (
//     <div>
      
//     </div>
//   )
// };

class ClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  };

  increment() {
    // Don't do this! 
    // this.state.counter + 1
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to my component</h1>
        <p>The count is: {this.state.counter}</p>
        <p>{this.props.message}</p>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default ClassBased;
