import React, { Component } from 'react'
import CadastroUsuarios from './cadastroUsuarios'
import ListaUsuarios from './listaUsuarios'
import { Mensagem } from '../utils/util'

import axios from 'axios'

const URLUsuarios = 'http://localhost:3003/usuarios'
const URLFilial = 'http://localhost:3003/filial'
const URLCCusto = 'http://localhost:3003/ccusto'

export default class AppUsuarios extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuarios: {
                loginUsuario: '',
                nomeUsuario: '',
                filialUsuario: '',
                cCustoUsuario: '',
            },
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this._id = ''        
        this._listaFilial = []
        this._listaCCusto = []

        this.refresh()
    }

    refresh(loginUsuario='') {

        // Carrega as filiais
        axios.get(URLFilial)
        .then(resp => resp.data.reduce((arrayAchatado, array) => 
                 arrayAchatado.concat(array.filial), []))
        .then(resp => this.carregaFilial(resp))

        // Carrega os Centro de Custos
        axios.get(URLCCusto)
        .then(resp => resp.data.reduce((arrayAchatado, array) => 
                 arrayAchatado.concat(array.ccusto), []))
        .then(resp => this.carregaCCusto(resp))

        let regex = new RegExp(loginUsuario, 'i')

        if (loginUsuario.length > 0) {
            axios.get(`${URLUsuarios}`)
                .then(resp => resp.data.filter(c => c.usuarios.loginUsuario.match(regex)))
                .then(resp => this.setState({...this.state, list: resp}))
                Mensagem('Usuário filtrado !!')
        } else {        
            axios.get(URLUsuarios)
            .then(resp => this.setState({...this.state,
                usuarios: {
                    loginUsuario: '',
                    nomeUsuario: '',
                    filialUsuario: '',
                    cCustoUsuario: '',
                    id: ''
                },
                list: resp.data}))
        }
    }

    carregaFilial(resp) {
        this._listaFilial = resp
    }

    carregaCCusto(resp) {
        this._listaCCusto = resp
    }

    handleInputChange(e) {

        // Copia todas as propriedades do estado (this.state.filial) para o objeto {} (filial)
        let usuarios = Object.assign({}, this.state.usuarios);
        // posiciona no objeto.name e pega o valor do objeto.value
        usuarios[e.target.name] = e.target.value;
        // Altera o estado com a nova informação digitada
        this.setState({usuarios})

        // atualizar o estado quando o atributo não for um objeto
        // this.setState({...this.state, [e.target.name] : e.target.value })

    }

    handleAdd(e) {
        e.preventDefault()
        const usuarios = this.state.usuarios

        if (usuarios.loginUsuario.length !== 0 || usuarios.nomeUsuario.length !== 0 ||
            usuarios.filialUsuario.length !== 0 || usuarios.cCustoUsuario.length !== 0) {

            if (this._id.length === 0) {
                axios.post(URLUsuarios, { usuarios})
                    window.scrollTo({top:0,behavior: 'smooth'})
                    this.refresh()
                    Mensagem('Usuário adicionado com sucesso !!!')
            } else {
                axios.put(URLUsuarios, { usuarios })
                    .then(resp => {
                        this._id = ''
                        this.refresh(this.state.usuarios.loginUsuario)
                        Mensagem('Usuário alterado com sucesso e filtro habilitado !!!')
                    })
            }
        } else {
            Mensagem('Preencher os campos do formulário')
        }
    }

    handleDelete(usuariosReg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URLUsuarios}/${usuariosReg._id}`)
            .then(resp => {
                window.scrollTo({top:0,behavior: 'smooth'})
                this.refresh()
                Mensagem('Usuário excluído com sucesso !!!')
            })
        }
    }

    handleChange(usuariosReg) {

        
        this._id = usuariosReg._id
        axios.get(`${URLUsuarios}/${this._id}`)
            .then(resp => this.setState({...this.state, 
                    usuarios: resp.data[0].usuarios}))
        window.scrollTo({top:0,behavior: 'smooth'})
    
    }

    handleSearch() {
        this.refresh(this.state.usuarios.loginUsuario)
    }

    handleClear() {
        Mensagem()
        this.refresh()
    }


    render() {
        return (
            <div>
                <CadastroUsuarios handleAdd={this.handleAdd} 
                                handleInputChange={this.handleInputChange} 
                                usuarios={this.state.usuarios}
                                listaFilial={this._listaFilial}
                                listaCCusto={this._listaCCusto}
                                className="form"
                                handleSearch={this.handleSearch}
                                handleClear={this.handleClear} />
                {!!this.state.list && <ListaUsuarios usuarios={this.state.list} 
                             handleDelete={this.handleDelete}
                             handleChange={this.handleChange} />}
            </div>
        )
    }
}