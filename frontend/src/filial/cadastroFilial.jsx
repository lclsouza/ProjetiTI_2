import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ handleAdd, handleInputChange, filial, handleClear, handleSearch }) => (
    <form onSubmit={handleAdd}>
        <h2 className='h2'>Cadastro de Filiais</h2>
        <div id='mensagemView'></div>
    
        <div className="input-group mb-3">
    
            <InputCustomizado id="codigoFilial" type="text" className='form-control' placeholder='Codigo da Filial'
                name="codigoFilial" value={filial.codigoFilial} onChange={handleInputChange} />
            <div className="input-group-append" id="button-addon4">
                {/* <button className="btn btn-outline-secondary" type="button">Cadastrar</button> */}
                <button className="btn btn-outline-secondary" type="button" 
                            tabIndex='-1' onClick={handleSearch}>Pesquisar</button>
            </div>
            <div className="input-group-append" id="button-addon4">
                {/* <button className="btn btn-outline-secondary" type="button">Cadastrar</button> */}
                <button className="btn btn-outline-secondary" type="button" 
                            tabIndex='-1' onClick={handleClear}>Limpa Pesquisa</button>
            </div>
        </div>

        <div className='form-group'>
            <InputCustomizado id="nomeFilial" type="text" className='form-control' placeholder='Nome da Filial'
                name="nomeFilial" value={filial.nomeFilial} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
            <InputCustomizado id="cnpjFilial" type="text" className='form-control' placeholder='CNPJ da Filial'
                name="cnpjFilial" value={filial.cnpjFilial} onChange={handleInputChange} />
        </div>
        <button type="submit" className='btn btn-primary'>Salvar</button>
        <button type="button" className='btn btn-primary ml-4' onClick={handleClear}>Voltar</button>
    </form>
)




