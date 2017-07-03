import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm.js';
import Calculator from './TemperatureCalculator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NameForm /> */}
        <Calculator />
      </div>
    );
  }
}

export default App;
