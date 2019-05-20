import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ handleAdd, handleInputChange, ccusto, listaFilial, handleSearch, handleClear }) => (
    <form onSubmit={handleAdd}>
        <h2 className='h2'>Cadastro de Centro de Custo</h2>
        <div id='mensagemView'></div>

        <div className="input-group mb-3">
        <InputCustomizado id="codigoCCusto" type="text" className='form-control' placeholder='Codigo do Centro de Custo' 
                name="codigoCCusto" value={ccusto.codigoCCusto} onChange={handleInputChange}/>
            <div className="input-group-append" id="button-addon4">
                <button className="btn btn-outline-secondary" 
                    type="button" onClick={handleSearch} tabIndex='-1'>Pesquisa</button>
                <button className="btn btn-outline-secondary" 
                    type="button" onClick={handleClear} tabIndex='-1'>Limpa Pesquisa</button>
            </div>
        </div>

        <div className='form-group'>
            <input id='nomeCCusto' className='form-control'
                placeholder='Nome da Centro de Custo'
                onChange={handleInputChange}
                name="nomeCCusto"
                value={ccusto.nomeCCusto} />
        </div>
        <div className='form-group'>
            <select id='filial' className='form-control'
                placeholder='Escolha a filial'
                onChange={handleInputChange}
                name="filialCCusto"
                value={ccusto.filialCCusto} >
                <option value='' disabled>
                    Escolha a Filial
                </option>
                {listaFilial.map((x, indice) => (
                        <option key={indice}
                                value = {x.codigoFilial}>
                                {x.codigoFilial}
                          </option>
                    )
                )}
            </select>
        </div>
        
        <input type="submit" className='btn btn-primary' value='Salvar'/>
        <input type="button" className='btn btn-primary ml-4' onClick={handleClear} value='Voltar' />
    </form>
)



