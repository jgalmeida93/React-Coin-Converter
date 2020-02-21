import React, { Component } from 'react';

import Conversor from './components/Conversor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="center">Coin converter 💰</h1>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <div className="card hoverable">
                <Conversor moedaA="USD" moedaB="BRL" />
              </div>
            </div>

            <div className="col s6">
              <div className="card hoverable">
              <Conversor moedaA="BRL" moedaB="USD" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <div className="card hoverable">
                <Conversor moedaA="EUR" moedaB="BRL" />
              </div>
            </div>

            <div className="col s6">
              <div className="card hoverable">
              <Conversor moedaA="BRL" moedaB="EUR" />
              </div>
            </div>
          </div>
        </div>


      <p className="center footer"><a href="https://github.com/jgalmeida93/react-coin-converter"><i class="fa fa-github-alt" aria-hidden="true"></i> - jgalmeida</a></p>

      </div>
    );
  }
}

export default App;
