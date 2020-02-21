import React, { Component } from 'react'

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
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
            this.setState({ moedaB_valor }); // ou moedaB_valor: moedaB_valor
        })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => {this.setState({moedaA_valor: event.target.value})}}/>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{ this.state.moedaB_valor }</h2>
            </div>
        );
    }
}