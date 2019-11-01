import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       counter: this.state.counter + 1
  //     });
  //   }, 1000);
  // }

  handleStartTimerClick() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span>Seconds: <br /> {this.state.counter}</span>
          </p>
          <button className="start-btn" onClick={() => this.handleStartTimerClick()}>Start Timer</button>
        </header>
      </div>
    )
  }
}

export default App;