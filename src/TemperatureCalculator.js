import React, {Component} from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  } else {
    return <p> The water would not boil.</p>
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convertor) {
  const t = +temperature;
  if(Number.isNaN(t)) {
    // alert(temperature + 'is not a valid temperature');
    return '';
  }

  const result = convertor(t);
  return result.toFixed(3);
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <legend>Enter temperator in {scaleNames[scale]}</legend>
        <input type='text' value={temperature} onChange={this.handleChange}/>
      </fieldset>
    );
  }

}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '37',
      scale: 'c'
    };
  }

  handleCelsiusChange(c) {
    const t = c ? c : 0;
    this.setState({
      temperature: t,
      scale: 'c'
    });
  }

  handleFahrenheitChange(f) {
    const t = f ? f : 0;
    this.setState({
      temperature: t,
      scale: 'f'
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = (scale === 'c' ? temperature : tryConvert(temperature, toCelsius));
    const fehrenheit = (scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit));
    return (
      <div>
        <TemperatureInput temperature={celsius} scale='c' onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput temperature={fehrenheit} scale='f' onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict temperature={+celsius} />
      </div>
    )
  }

}

export default Calculator;
