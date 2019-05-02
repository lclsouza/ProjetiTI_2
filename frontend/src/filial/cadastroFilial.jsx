import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ adicionar, handleInputChange, filial }) => (
    <form className='cadastro-form' onSubmit={adicionar}>
        <h1 className='title'>Cadastro de Filiais</h1>
        <div className='form-input'>
            {/* <input id='codigo' className='field'
                placeholder='Codigo da Filial'
                name="codigo"
                onChange={handleInputChange}
                value={filial.codigo} /> */}
            <InputCustomizado id="codigoFilial" type="text" className='field' placeholder='Codigo da Filial' 
                name="codigoFilial" value={filial.codigoFilial} onChange={handleInputChange} autoFocus/>
        </div>
        <div className='form-input'>
            <InputCustomizado id="nomeFilial" type="text" className='field' placeholder='Nome da Filial' 
                name="nomeFilial" value={filial.nomeFilial} onChange={handleInputChange}/>
        </div>
        <div className='form-input'>
            <InputCustomizado id="cnpjFilial" type="text" className='field' placeholder='CNPJ da Filial' 
                name="cnpjFilial" value={filial.cnpjFilial} onChange={handleInputChange}/>
        </div>
        <input type="submit" className='button' value='Salvar'/>
        <input type="submit" className='button' value='Salvar'/>
    </form>
)




