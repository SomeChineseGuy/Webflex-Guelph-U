import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  };

  // useEffect(() => {},[])
  componentDidMount () {
    // only runs on initial load 
    // this is where you make api calls for data and then you take that data
    // and update state
  }

  // useEffect(() => {},[counter])
  componentDidUpdate (prevProps, prevState) {
    if(prevState.counter !== this.state.counter) {

    }
  }

  // useEffect(() => {return cleanupcode},[])
  componentWillUnmount () {
    // Clean up code
  }

  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
      </div>
    )
  }
}

export default LifeCycle;
