import React, { Component } from 'react'
import CadastroInventario from './cadastroInventario'
import ListaInventario from './listaInventario'
import { Mensagem } from '../utils/util'

import axios from 'axios'

const URLInventario = 'http://localhost:3003/inventario'


export default class AppInventarios extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inventario: {
                descricao: '',
                dataCompra: '',
                ccusto: '',
                patrimonio: '',
                filial: '',
                marca: '',
                modelo: '',
                numeroSerie: '',
                nomeFornecedor: '',
                numeroNF: '',
                tipoInventario: '',
                memoriaRam: '',
                processador: '',
                hd: '',
                nomeMaquina: '',
                so: '',
                office: '',
                enderecoIP: '',
                modeloCartuchoTonner: '',
                imei1: '',
                imei2: '',
                potencia: '',
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
        this.refresh()
    }

    refresh(descricao='') {

        let regex = new RegExp(descricao, 'i')

        if (descricao.length > 0) {
            axios.get(`${URLInventario}`)
                .then(resp => resp.data.filter(c => c.inventario.descricao.match(regex)))
                .then(resp => this.setState({...this.state, list: resp}))
                Mensagem('Inventário filtrado !!')
        } else {        
            axios.get(URLInventario)
            .then(resp => this.setState({...this.state,
                inventario: {
                    data: '',
                    nomeFornecedor: '',
                    ccusto: '',
                    patrimonio: '',
                    filial: '',
                    marca: '',
                    modelo: '',
                    numeroSerie: '',
                    memoriaRam: '',
                    processador: '',
                    hd: '',
                    nomeMaquina: '',
                    so: '',
                    office: '',
                    dataCompra: '',
                    fornecedor: '',
                    numeroNF: '',
                    enderecoIP: '',
                    modeloCartuchoTonner: '',
                    imei1: '',
                    imei2: '',
                    potencia: ''
                },
            list: resp.data}))
        }
    }

    handleInputChange(e) {

        // Copia todas as propriedades do estado (this.state.filial) para o objeto {} (filial)
        let inventario = Object.assign({}, this.state.inventario);

        if (e.target.type === 'checkbox') {
            inventario.tiposServicos[e.target.name] = e.target.checked
        // } else if (e.target.type === 'radio') {
        //     inventario[e.target.name] = e.target.value;
        } else {
            inventario[e.target.name] = e.target.value;
        }
 
        this.setState({inventario})
    }

    handleAdd(e) {
        e.preventDefault()
        const inventario = this.state.inventario

        if (e.target.value) {

            if (this._id.length === 0) {
                axios.post(URLInventario, { inventario })
                .then(resp => {
                    window.scrollTo({top:0,behavior: 'smooth'})
                    this.refresh()
                    Mensagem('Inventario adicionado com sucesso !!!')
                })
                    
            } else {
                axios.put(`${URLInventario}/${this._id}`, { inventario })
                    .then(resp => {
                        this._id = ''
                        this.refresh(this.state.inventario.descricao)
                        Mensagem('Inventario alterado com sucesso e filtro habilitado !!!')
                    })
            }
        } else {
            Mensagem('Preencher os campos do formulário')
        }
    }

    handleDelete(inventarioReg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URLInventario}/${inventarioReg._id}`)
            .then(resp => {
                window.scrollTo({top:0,behavior: 'smooth'})
                this.refresh()
                Mensagem('Inventario excluído com sucesso !!!')
            })
        }
    }

    handleChange(inventarioReg) {

        this._id = inventarioReg._id
        axios.get(`${URLInventario}/${this._id}`)
           .then(resp => this.setState({...this.state, 
                   inventario: resp.data[0].inventario,
                   tiposServicos: resp.data[0].inventario.tiposServicos}))
        window.scrollTo({top:0,behavior: 'smooth'})
    }

    handleSearch() {
        this.refresh(this.state.inventario.descricao)
    }

    handleClear() {
        Mensagem()
        this.refresh()
    }


    render() {
        return (
            <div>
                <CadastroInventario handleAdd={this.handleAdd} 
                                handleInputChange={this.handleInputChange} 
                                handleSearch={this.handleSearch}
                                inventario={this.state.inventario}
                                handleClear={this.handleClear} />
                <ListaInventario fornecedor={this.state.list} 
                             handleDelete={this.handleDelete}
                             handleChange={this.handleChange} />
            </div>
        )
    }
}