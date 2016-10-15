import React from 'react';
import CounterButton from './CounterButton';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    let count = this.state.count;
    let inc = () => {
      this.setState({count: count + 1});
    }
    return (
      <div>
        <p>Your count is {count}</p>
        <CounterButton onClick={inc} count={count} />
      </div>
    );
  }
}

export default App;