import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberInput from './NumberInput/NumberInput';
import ThreeIdiots from './public/three-idiots';

class App extends Component {

    output = 'Prueba';

    onNumberInputHandler = () => {
        ThreeIdiots('1234');
    };

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <NumberInput />
              <p/>
              {this.output}
          </div>
        );
  }
}

export default App;


