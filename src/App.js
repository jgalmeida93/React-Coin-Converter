import React, { Component } from 'react';

import Conversor from './components/Conversor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Conversor moedaA="USD" moedaB="BRL" />

      </div>
    );
  }
}

export default App;
