import React, { Component } from 'react'
import CadastroFilial from './cadastroFilial'
import ListaFilial from './listaFilial'
import { Mensagem } from '../utils/util'

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
            },
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this._id = ''
        this.refresh()
    }

    refresh(filial='') {

        let regex = new RegExp(filial, 'i')
        if (filial.length > 0) {
            axios.get(`${URL}`)
                .then(resp => resp.data.filter(c => c.filial.codigoFilial.match(regex)))
                .then(resp => this.setState({...this.state, list: resp}))
                Mensagem('Filial filtrada !!')
        } else { 
            axios.get(`${URL}`)
                .then(resp => this.setState({...this.state,
                    filial: {
                        codigoFilial: '',
                        nomeFilial: '',
                        cnpjFilial: '',
                    },
                    list: resp.data
        }))}
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

    handleAdd(e) {
        e.preventDefault()

        const filial = this.state.filial

        if (filial.codigoFilial !== 0 || filial.nomeFilial !== 0) {

            if (this._id.length === 0) {
                axios.post(URL, { filial })
                   .then(resp => this.refresh())
            } else {
                axios.put(`${URL}/${this._id}`, { filial })
                   .then(resp => {
                       this._id = ''
                       this.refresh()
                       Mensagem('Filial alterada com sucesso !!!')
                })
            }
        } else {
            Mensagem('Preencher os campos do formulário')
        }
    }

    handleDelete(filreg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URL}/${filreg._id}`)
                window.scrollTo({top:0,behavior: 'smooth'})
                this.refresh()
                Mensagem('Filial excluída com sucesso !!!')
        }
    }

    handleChange(filReg) {

        this._id = filReg._id
        axios.get(`${URL}/${this._id}`)
            .then(resp => this.setState({...this.state, 
                    filial: resp.data[0].filial}))
        window.scrollTo({top:0,behavior: 'smooth'})
    }

    handleSearch() {
        this.refresh(this.state.filial.codigoFilial)
    }

    handleClear() {
        Mensagem()
        this.refresh()
    }

    render() {
        return (
            <div>
                <CadastroFilial handleAdd={this.handleAdd} 
                                handleInputChange={this.handleInputChange} 
                                filial={this.state.filial}
                                handleClear={this.handleClear}
                                handleSearch={this.handleSearch}
                                className="form"/>
                {!!this.state.list && <ListaFilial filial={this.state.list} 
                             handleDelete={this.handleDelete}
                             handleChange={this.handleChange}
                    />}
               
            </div>
        )
    }
}