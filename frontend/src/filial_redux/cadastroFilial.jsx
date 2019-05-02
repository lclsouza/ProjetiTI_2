import React from 'react'
import { connect } from 'react-redux'
import InputCustomizado from '.././components/InputCustomizado'
import { bindActionCreators } from 'redux'
import { handleInputChange } from './filialAction'

const cadastroFilial = props => (
//export default ({ adicionar, handleInputChange, filial }) => (
    <form className='cadastro-form' onSubmit={props.adicionar}>
        <h1 className='title'>Cadastro de Filiais</h1>
        <div className='form-input'>
            {/* <input id='codigo' className='field'
                placeholder='Codigo da Filial'
                name="codigo"
                onChange={handleInputChange}
                value={filial.codigo} /> */}
            <InputCustomizado id="codigoFilial" type="text" className='field' placeholder='Codigo da Filial' 
                name="codigoFilial" value={props.codigoFilial} onChange={props.handleInputChange}/>
        </div>
        <div className='form-input'>
            <InputCustomizado id="nomeFilial" type="text" className='field' placeholder='Nome da Filial' 
                name="nomeFilial" value={props.nomeFilial} onChange={props.handleInputChange}/>
        </div>
        <div className='form-input'>
            <InputCustomizado id="cnpjFilial" type="text" className='field' placeholder='CNPJ da Filial' 
                name="cnpjFilial" value={props.cnpjFilial} onChange={props.handleInputChange}/>
        </div>
        <input type="submit" className='button' value='Salvar'/>
    </form>
)

const mapStateToProps = state => ({
    filial: state.filialTI.filial
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ handleInputChange }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(cadastroFilial)



