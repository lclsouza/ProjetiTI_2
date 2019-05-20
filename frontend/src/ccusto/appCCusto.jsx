import React, { Component } from 'react'
import CadastroCCusto from './cadastroCCusto'
import ListaCCusto from './listaCCusto'
import { Mensagem } from '../utils/util'

import axios from 'axios'

const URLCCusto = 'http://localhost:3003/ccusto'
const URLFilial = 'http://localhost:3003/filial'

export default class AppCCusto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ccusto: {
                codigoCCusto: '',
                nomeCCusto: '',
                filialCCusto: '',
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
        this.refresh()
    }

    refresh(codigo_ccusto='') {
       
        console.log(codigo_ccusto)
        let regex = new RegExp(codigo_ccusto, 'i')

        if (codigo_ccusto.length > 0) {
            axios.get(`${URLCCusto}`)
                .then(resp => resp.data.filter(c => c.ccusto.codigoCCusto.match(regex)))
                .then(resp => this.setState({...this.state, list: resp}))
                Mensagem('Centro de Custo filtrado !!')
        } else {
            axios.get(URLCCusto)
            .then(resp => this.setState({...this.state,
                ccusto: {
                    codigoCCusto: '',
                    nomeCCusto: '',
                    filialCCusto: '',
                },
                 list: resp.data}))
        }            

        axios.get(URLFilial)
        .then(resp => resp.data.reduce((arrayAchatado, array) => 
                    arrayAchatado.concat(array.filial), []))
        .then(resp => this.carregaFilial(resp)) 

    }

    carregaFilial(resp) {
        this._listaFilial = resp
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

    handleAdd(e) {
        e.preventDefault()

        const ccusto = this.state.ccusto

        if (ccusto.codigoCCusto.length !== 0 || ccusto.nomeCCusto.length !== 0 ||
            ccusto.filialCCusto.length !== 0 ) {
            
            if (this._id.length === 0) {

                axios.post(URLCCusto, { ccusto })
                    .then(resp => {
                        window.scrollTo({top:0,behavior: 'smooth'})
                        this.refresh()
                        Mensagem('Centro de Custo adicionado com sucesso !!!')
                    })
            } else {
                axios.put(`${URLCCusto}/${this._id}`, { ccusto })
                        .then(resp => {
                            this._id = ''
                            this.refresh(this.state.ccusto.codigoCCusto)
                            Mensagem('Centro de Custo alterado com sucesso e filtro habilitado !!!')
                        })
            }   
        } else {
            Mensagem('Preencher os campos do formulário')
        }
    }

    handleDelete(ccustoReg) {

        if (window.confirm('Tem Certeza (S/N)')) {
            axios.delete(`${URLCCusto}/${ccustoReg._id}`)
            .then(resp => {
                window.scrollTo({top:0,behavior: 'smooth'})
                this.refresh()
                Mensagem('Centro de Custo excluído com sucesso !!!')
            })
           
        }
    }

    handleChange(ccustoReg) {

        this._id = ccustoReg._id
        axios.get(`${URLCCusto}/${ccustoReg._id}`)
            .then(resp => this.setState({...this.state, 
                    ccusto: resp.data[0].ccusto}))
        window.scrollTo({top:0,behavior: 'smooth'})

    }

    handleSearch() {
 //       console.log(this.state.ccusto.codigoCCusto)
        this.refresh(this.state.ccusto.codigoCCusto)
    }

    handleClear() {
        Mensagem()
        this.refresh()
    }


    render() {
        return (
            <div>
                <CadastroCCusto handleAdd={this.handleAdd} 
                                handleInputChange={this.handleInputChange} 
                                ccusto={this.state.ccusto}
                                handleSearch={this.handleSearch}
                                handleClear={this.handleClear}                                
                                listaFilial={this._listaFilial}
                                className="form"/>
                {!!this.state.list && <ListaCCusto ccusto={this.state.list} 
                             handleDelete={this.handleDelete}
                             handleChange={this.handleChange}
                             />}
            </div>
        )
    }
}