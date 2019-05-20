import React from 'react'

export default ({ handleAdd, handleInputChange, usuarios, listaFilial, listaCCusto, handleSearch, handleClear }) => (
    <form className='cadastro-form' onSubmit={handleAdd}>
        <h2 className='h2'>Cadastro de Usuários</h2>
        <div id='mensagemView'></div>
        <div className="input-group mb-3">
        <input id='loginUsuario' className='form-control'
                placeholder='Login do Usuário'
                name="loginUsuario"
                onChange={handleInputChange}
                value={usuarios.loginUsuario} />
            <div className="input-group-append" id="button-addon4">
                {/* <button className="btn btn-outline-secondary" type="button">Cadastrar</button> */}
                <button className="btn btn-outline-secondary" type="button" 
                        onClick={handleSearch} tabIndex='-1'>Pesquisar</button>
            </div>
            <div className="input-group-append" id="button-addon4">
                {/* <button className="btn btn-outline-secondary" type="button">Cadastrar</button> */}
                <button className="btn btn-outline-secondary" type="button" 
                            onClick={handleClear} tabIndex='-1'>Limpa Pesquisa</button>
            </div>
        </div>

        <div className='form-group'>
            <input id='nomeUsuario' className='form-control'
                placeholder='Nome do usuario'
                onChange={handleInputChange}
                name="nomeUsuario"
                value={usuarios.nomeUsuario} />
        </div>
        <div className='form-group'>
            <select id='filialUsuario' className='form-control'
                onChange={handleInputChange}
                name="filialUsuario"
                value={usuarios.filialUsuario} >
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
            <button type="button" className='btn btn-primary ml-4' onClick={handleClear}>Voltar</button>
    </form>
)




