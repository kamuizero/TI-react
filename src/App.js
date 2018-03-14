import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberInput from './NumberInput/NumberInput';
import ThreeIdiots from './public/three-idiots';

class App extends Component {

    state = {output : 'Prueba'};

    onNumberInputHandler = (event) => {
        this.setState({output : ThreeIdiots(event.target.value)});
    };

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <NumberInput textChanged={(event) => this.onNumberInputHandler(event)} />
              <p/>
              {this.state.output}
          </div>
        );
  }
}

export default App;


