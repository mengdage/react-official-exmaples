import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm.js';
import Calculator from './TemperatureCalculator.js'
import FilterableProductTable from './ProductTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NameForm /> */}
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
