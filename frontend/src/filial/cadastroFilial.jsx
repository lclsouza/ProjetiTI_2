import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ adicionar, handleInputChange, filial }) => (
    <form onSubmit={adicionar}>
        <h2 className='h2'>Cadastro de Filiais</h2>
        {/* <input id='codigo' className='form-control'
                placeholder='Codigo da Filial'
                name="codigo"
                onChange={handleInputChange}
                value={filial.codigo} /> */}
<<<<<<< HEAD
            <InputCustomizado id="codigoFilial" type="text" className='field' placeholder='Codigo da Filial' 
                name="codigoFilial" value={filial.codigoFilial} onChange={handleInputChange} autoFocus/>
=======

        <div className="input-group mb-3">
            <InputCustomizado id="codigoFilial" type="text" className='form-control' placeholder='Codigo da Filial'
                name="codigoFilial" value={filial.codigoFilial} onChange={handleInputChange} />
            <div className="input-group-append" id="button-addon4">
                <button className="btn btn-outline-secondary" type="button">Cadastrar</button>
                <button className="btn btn-outline-secondary" type="button">Pesquisar</button>
            </div>
>>>>>>> 73d227b6b41a30f6e863b2b3aa197daceb92a2fd
        </div>

        <div className='form-group'>
            <InputCustomizado id="nomeFilial" type="text" className='form-control' placeholder='Nome da Filial'
                name="nomeFilial" value={filial.nomeFilial} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
            <InputCustomizado id="cnpjFilial" type="text" className='form-control' placeholder='CNPJ da Filial'
                name="cnpjFilial" value={filial.cnpjFilial} onChange={handleInputChange} />
        </div>
<<<<<<< HEAD
        <input type="submit" className='button' value='Salvar'/>
=======
        <input type="submit" className='btn btn-primary' value='Salvar' />
        <input type="submit" className='btn btn-primary ml-4' value='Voltar' />
>>>>>>> 73d227b6b41a30f6e863b2b3aa197daceb92a2fd
    </form>
)




