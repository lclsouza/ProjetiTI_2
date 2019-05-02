import React, { Component } from 'react'
import CadastroCCusto from './cadastroCCusto'
import ListaCCusto from './listaCCusto'

import axios from 'axios'

const URL = 'http://localhost:3003/ccusto'
const URLFilial = 'http://localhost:3003/filial'

export default class AppCCusto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ccusto: {
                codigoCCusto: '',
                nomeCCusto: '',
                filialCCusto: '',
                id: ''
            },
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.adicionar = this.adicionar.bind(this)
        this.excluir = this.excluir.bind(this)
        this.alterar = this.alterar.bind(this)
        this._listaFilial = []

        this.refresh()
    }

    refresh() {
       
         axios.get(URLFilial)
             .then(resp => resp.data.reduce((arrayAchatado, array) => 
                         arrayAchatado.concat(array.filial), []))
             .then(resp => this.carregaFilial(resp)) 

        axios.get(URL)
        .then(resp => this.setState({...this.state,
            ccusto: {
                codigoCCusto: '',
                nomeCCusto: '',
                filialCCusto: '',
                id: ''
            },
             list: resp.data}))

    }

    carregaFilial(resp) {
        this._listaFilial = resp
        // this._listaFilial = [
        //     {codigo: 'MVR', nomeFilial: 'MATRIZ VOLTA REDONDA'},
        //     {codigo: 'FCB', nomeFilial: 'CUBATAO'},
        //     {codigo: 'FPA', nomeFilial: 'FILIAL PORTO AÇU'},
        //     {codigo: 'FBA', nomeFilial: 'FILIAL BAHIA'}
        // ]
        // console.log('resp:', resp)
        // console.log('lista filial:', this._listaFilial)
        // this._listaFilial.map(x => console.log(x.codigo, x.nomeFilial))
    }

    handleInputChange(e) {

        // Copia todas as propriedades do estado (this.state.filial) para o objeto {} (filial)
        let ccusto = Object.assign({}, this.state.ccusto);
        // posiciona no objeto.name e pega o valor do objeto.value
        ccusto[e.target.name] = e.target.value;
        // Altera o estado com a nova informação digitada
        this.setState({ccusto})

        // atualizar o estado quando o atributo não for um objeto
        // this.setState({...this.state, [e.target.name] : e.target.value })

    }

    adicionar() {
        const ccusto = this.state.ccusto

        if (ccusto.codigo.length !== 0 || ccusto.nomeccusto.length !== 0) {

            if (ccusto.id.length === 0) {
                axios.post(URL, { ccusto })
                   .then(resp => this.refresh())
            } else {
                axios.put(URL, { ccusto })
                  .then(resp => this.refresh())
            }
        } else {
            alert('Preencher os campos do formulário')
        }
    }

    excluir(filreg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URL}/${filreg._id}`)
              .then(resp => this.refresh())
           
        }
    }

    alterar(filreg) {

        axios.get(`${URL}/${filreg._id}`)
            .then(resp => resp.data.reduce((arrayAchatado, array) => 
                arrayAchatado.concat(array.ccusto)), [])
            .then(resp => this.setState({...this.state, 
                    ccusto: {
                        codigoCCusto: resp.ccusto.codigo, 
                        nomeCCusto: resp.ccusto.nomeCCusto,  
                        filialCCusto: resp.ccusto.filial,
                        id: resp._id  
                        }
                }))       
        }

    render() {
        return (
            <div>
                <CadastroCCusto adicionar={this.adicionar} 
                                handleInputChange={this.handleInputChange} 
                                ccusto={this.state.ccusto}
                                listaFilial={this._listaFilial}
                                className="form"/>
                {!!this.state.list && <ListaCCusto ccusto={this.state.list} 
                             excluir={this.excluir}
                             alterar={this.alterar}
                             />}
            </div>
        )
    }
}