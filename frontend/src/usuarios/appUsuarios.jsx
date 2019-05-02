import React, { Component } from 'react'
import CadastroUsuarios from './cadastroUsuarios'
import ListaUsuarios from './listaUsuarios'

import axios from 'axios'

const URL = 'http://localhost:3003/usuarios'
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
                id: ''
            },
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.adicionar = this.adicionar.bind(this)
        this.excluir = this.excluir.bind(this)
        this.alterar = this.alterar.bind(this)

        this._listaFilial = []
        this._listaCCusto = []

        this.refresh()
    }

    refresh() {

        // Carrega as filiais
        axios.get(URLFilial)
        .then(resp => resp.data.reduce((arrayAchatado, array) => 
                 arrayAchatado.concat(array.filial), []))
        .then(resp => this.carregaFilial(resp))

        // Carrega os Centro de Custos
        axios.get(URLCCusto)
        .then(resp => resp.data.reduce((arrayAchatado, array) => 
                 arrayAchatado.concat(array.ccusto), []))
//        .then(resp => console.log(resp))
        .then(resp => this.carregaCCusto(resp))

        axios.get(URL)
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

    adicionar() {
        const usuarios = this.state.usuarios
        console.log(usuarios)

        if (usuarios.loginUsuario.length !== 0 || usuarios.nomeUsuario.length !== 0 ||
            usuarios.filialUsuario.length !== 0 || usuarios.cCustoUsuario.length !== 0) {

            if (usuarios.id.length === 0) {
                axios.post(URL, { usuarios})
                    .then(resp => console.log('gravou'))
                    // .then(resp => this.refresh())
            } else {
                axios.put(URL, { usuarios })
                  .then(resp => this.refresh())
            }
        } else {
            alert('Preencher os campos do formulário')
        }
    }

    excluir(usuariosReg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URL}/${usuariosReg._id}`)
                .then(resp => this.refresh())
           
        }
    }

    alterar(usuariosReg) {

        axios.get(`${URL}/${usuariosReg._id}`)
            .then(resp => resp.data.reduce((arrayAchatado, array) => 
                arrayAchatado.concat(array.usuarios)), [])
            .then(resp => {
                this.setState({...this.state, 
                    usuarios: {
                        loginUsuario: resp.usuarios.loginUsuario, 
                        nomeUsuario: resp.usuarios.nomeUsuario,
                        filialUsuario: resp.usuarios.filialUsuario,
                        cCustoUsuario: resp.usuarios.cCustoUsuario,
                        id: resp._id  
                        }
                })
                window.scrollTo({top:0,behavior: 'smooth'})
            })       
        }

    render() {
        return (
            <div>
                <CadastroUsuarios adicionar={this.adicionar} 
                                handleInputChange={this.handleInputChange} 
                                usuarios={this.state.usuarios}
                                listaFilial={this._listaFilial}
                                listaCCusto={this._listaCCusto}
                                className="form"/>
                {!!this.state.list && <ListaUsuarios usuarios={this.state.list} 
                             excluir={this.excluir}
                             alterar={this.alterar} />}
            </div>
        )
    }
}