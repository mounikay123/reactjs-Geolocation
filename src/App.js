import React, { Component } from 'react';

import ResultCalculator from './components/keypadCal';
import CalculatorResult from './components/calculatorResult';
// import MapContainer from './components/googleMaps'
import GeoLocation from './components/geoLocation'

import Tweet from './components/tweets';

import './App.css';

class App extends Component {
  state = {
    result: ""
  }

  calButton = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval((checkResult)) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {
   return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
           {/*<MapContainer />*/}
         
          <CalculatorResult result={this.state.result} />
          <ResultCalculator calButton={this.calButton} />
          <Tweet />
           <GeoLocation />

        </div>
      </div>
    );
  }
}

export default App;