import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ adicionar, handleInputChange, ccusto, listaFilial }) => (
    <form className='cadastro-form' onSubmit={adicionar}>
        <h1 className='title'>Cadastro de Centro de Custo</h1>
        <div className='form-input'>
            {/* <input id='codigo' className='field'
                placeholder='Codigo do Centro de Custo'
                name="codigo"
                onChange={handleInputChange}
                value={ccusto.codigo} /> */}
             <InputCustomizado id="codigoCCusto" type="text" className='field' placeholder='Codigo do Centro de Custo' 
                name="codigoCCusto" value={ccusto.codigoCCusto} onChange={handleInputChange}/>
        </div>
        <div className='form-input'>
            <input id='nomeCCusto' className='field'
                placeholder='Nome da Centro de Custo'
                onChange={handleInputChange}
                name="nomeCCusto"
                value={ccusto.nomeCCusto} />
        </div>
        <div className='form-input'>
            <select id='filial' className='field'
                placeholder='Escolha a filial'
                onChange={handleInputChange}
                name="filial"
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
        
        <input type="submit" className='button' value='Salvar'/>
    </form>
)



