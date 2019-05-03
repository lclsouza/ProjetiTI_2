import React, { Component } from 'react'
import CadastroFilial from './cadastroFilial'
import ListaFilial from './listaFilial'

import axios from 'axios'

const URL = 'http://localhost:3003/filial'

export default class AppFilial extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filial: {
                codigoFilial: '',
                nomeFilial: '',
                cnpjFilial: '',
                id: ''
            },
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.adicionar = this.adicionar.bind(this)
        this.excluir = this.excluir.bind(this)
        this.alterar = this.alterar.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleClear()
    }

    refresh(filial) {

        axios.get(URL)
            .then(resp => this.setState({...this.state,
                filial,
                //  filial: {
                //     codigoFilial: '',
                //     nomeFilial: '',
                //     cnpjFilial: '',
                //     id: ''
                // },
              list: resp.data}))
    }

    handleInputChange(e) {

        e.preventDefault()
        // Copia todas as propriedades do estado (this.state.filial) para o objeto {} (filial)
        let filial = Object.assign({}, this.state.filial);
        // posiciona no objeto.name e pega o valor do objeto.value
        filial[e.target.name] = e.target.value;
        // Altera o estado com a nova informação digitada
        this.setState({filial})

        // atualizar o estado quando o atributo não for um objeto
        // this.setState({...this.state, [e.target.name] : e.target.value })

    }

    adicionar(e) {
        e.preventDefault()

        const filial = this.state.filial

        if (filial.codigoFilial.length !== 0 || filial.nomeFilial.length !== 0) {

            if (filial.id.length === 0) {
                axios.post(URL, { filial })
   //                .then(resp => this.refresh())
                     .then(resp => this.handleClear())
            } else {
                axios.put(URL, { filial })
    //              .then(resp => this.refresh())
                    .then(resp => this.handleClear())
            }
        } else {
            alert('Preencher os campos do formulário')
        }
    }

    excluir(filreg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URL}/${filreg._id}`)
  //              .then(resp => this.refresh())
                  .then(resp => this.handleClear())
           
        }
    }

    alterar(filreg) {

        axios.get(`${URL}/${filreg._id}`)
            .then(resp => resp.data.reduce((arrayAchatado, array) => 
                arrayAchatado.concat(array.filial)), [])
            .then(resp => {
                this.setState({...this.state, 
                    filial: {
                        codigoFilial: resp.filial.codigoFilial, 
                        nomeFilial: resp.filial.nomeFilial,
                        cnpjFilial: resp.filial.cnpjFilial,
                        id: resp._id  
                        }
                })
                window.scrollTo({top:0,behavior: 'smooth'})
            })       
    }

    handleClear() {
        let filial = {
            codigoFilial: '',
            nomeFilial: '',
            cnpjFilial: '',
            id: ''
        }
        this.refresh(filial)
    }

    render() {
        return (
            <div>
                <CadastroFilial adicionar={this.adicionar} 
                                handleInputChange={this.handleInputChange} 
                                filial={this.state.filial}
                                handleClear={this.handleClear}
                                className="form"/>
                {!!this.state.list && <ListaFilial filial={this.state.list} 
                             excluir={this.excluir}
                             alterar={this.alterar}
                    />}
               
            </div>
        )
    }
}