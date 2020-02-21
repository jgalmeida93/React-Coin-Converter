import React, { Component } from 'react'
import './Conversor.css';

export default class Conversor extends Component {

    // O constructor(props) é usado para acessar as props passadas no component app nesse caso
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        // toda função no javascript tem esse método bind 
        this.converter = this.converter.bind(this);
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=441da2df5a45e7812435`;


        fetch(url)
        .then(res => {

            return res.json();            

        })
        .then(json => {
            
            // Formato do JSON: {"USD_BRL":4.393898}
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
            this.setState({ moedaB_valor }); // ou moedaB_valor: moedaB_valor
        })
    }

    render() {
        return (
            <div className="conversor">
                <h5 className="center">{this.props.moedaA} para {this.props.moedaB}</h5>
                <input type="text" onChange={(event) => {this.setState({moedaA_valor: event.target.value})}}/>
                <input type="button" className="btn right light-green darken-3" value="Converter" onClick={this.converter}></input>
                <h5>{ this.state.moedaB_valor }</h5>
            </div>
        );
    }
}
