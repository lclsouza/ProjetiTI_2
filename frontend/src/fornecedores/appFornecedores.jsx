import React, { Component } from 'react'
import CadastroFornecedores from './cadastroFornecedores'
import ListaFornecedores from './listaFornecedores'
import { Mensagem } from '../utils/util'

import axios from 'axios'

const URLFornecedores = 'http://localhost:3003/fornecedores'


export default class AppFornecedores extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fornecedores: {
                codigoFornecedor: '',
                nomeFornecedor: '',
                contato: '',
                telefone: '',
                email: '',
                observacao: '',
                tiposServicos: {
                    hardware: false,
                    software: false,
                    rede: '',
                    smartphone: '',
                    telefonia: '',
                    servidor: '',
                    infraestrutura: '',
                    iphone: '',
                    internet: ''
                }
            },
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this._fornecedores = this.state.fornecedores
        this._id = ''
        this.refresh()
    }

    refresh(nomeF='') {
        let fornecedores = this._fornecedores
    
        let regex = new RegExp(nomeF, 'i')

        if (nomeF.length > 0) {
            axios.get(`${URLFornecedores}`)
                .then(resp => resp.data.filter(c => c.fornecedores.nomeFornecedor.match(regex)))
                .then(resp => this.setState({...this.state, list: resp}))
                Mensagem('Fornecedor filtrado !!')
        } else {        
            axios.get(URLFornecedores)
            .then(resp => this.setState({...this.state,
                    fornecedores,
                list: resp.data}))
        }
    }


    handleInputChange(e) {

        // Copia todas as propriedades do estado (this.state.filial) para o objeto {} (filial)
        let fornecedores = Object.assign({}, this.state.fornecedores);
        // posiciona no objeto.name e pega o valor do objeto.value
        if (e.target.type === 'checkbox') {
            //fornecedores.tiposServicos = Object.assign({}, this.state.fornecedores.tiposServicos)
            fornecedores.tiposServicos[e.target.name] = e.target.checked
        } else {
            fornecedores[e.target.name] = e.target.value;
        }
 
        this.setState({fornecedores})

    }

    handleAdd(e) {
        e.preventDefault()
        const fornecedores = this.state.fornecedores

        if (fornecedores.codigoFornecedor.length !== 0 || fornecedores.nomeFornecedor.length !== 0 ||
            fornecedores.telefone.length !== 0 || fornecedores.email.length !== 0 || 
            fornecedores.observacao.length !== 0) {

            if (this._id.length === 0) {
                axios.post(URLFornecedores, { fornecedores })
                .then(resp => {
                    window.scrollTo({top:0,behavior: 'smooth'})
                    this.refresh()
                    Mensagem('Fornecedor adicionado com sucesso !!!')
                })
                    
            } else {
                axios.put(`${URLFornecedores}/${this._id}`, { fornecedores })
                    .then(resp => {
                        this._id = ''
                        this.refresh(this.state.fornecedores.nomeFornecedor)
                        Mensagem('Fornecedor alterado com sucesso e filtro habilitado !!!')
                    })
            }
        } else {
            Mensagem('Preencher os campos do formulário')
        }
    }

    handleDelete(fornecedoresReg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URLFornecedores}/${fornecedoresReg._id}`)
            .then(resp => {
                window.scrollTo({top:0,behavior: 'smooth'})
                this.refresh()
                Mensagem('Fornecedor excluído com sucesso !!!')
            })
        }
    }

    handleChange(fornecedoresReg) {

        
        this._id = fornecedoresReg._id
        axios.get(`${URLFornecedores}/${this._id}`)
            // .then(resp => resp.data)
            // .then(resp => [resp[0].fornecedores])
            // .then(resp => console.log(resp))
//            .then(resp => resp.reduce((arrayA, a) => arrayA.concat(a.tiposServicos), []))
//            .then(resp => console.log(resp))
           .then(resp => this.setState({...this.state, 
                   fornecedores: resp.data[0].fornecedores,
                   tiposServicos: resp.data[0].fornecedores.tiposServicos}))
        window.scrollTo({top:0,behavior: 'smooth'})
    }

    handleSearch() {
        this.refresh(this.state.fornecedores.loginUsuario)
    }

    handleClear() {
        Mensagem()
        this.refresh()
    }


    render() {
        return (
            <div>
                <CadastroFornecedores handleAdd={this.handleAdd} 
                                handleInputChange={this.handleInputChange} 
                                handleSearch={this.handleSearch}
                                fornecedores={this.state.fornecedores}
                                handleClear={this.handleClear} />
                <ListaFornecedores fornecedor={this.state.list} 
                             handleDelete={this.handleDelete}
                             handleChange={this.handleChange} />
            </div>
        )
    }
}