import React from 'react'

export default ({ adicionar, handleInputChange, usuarios, listaFilial, listaCCusto }) => (
    <form className='cadastro-form' onSubmit={adicionar}>
        <h1 className='title'>Cadastro de Usuários</h1>
        <div className='form-input'>
            <input id='loginUsuario' className='field'
                placeholder='Login do Usuário'
                name="loginUsuario"
                onChange={handleInputChange}
                value={usuarios.loginUsuario} />
        </div>
        <div className='form-input'>
            <input id='nomeUsuario' className='field'
                placeholder='Nome do usuario'
                onChange={handleInputChange}
                name="nomeUsuario"
                value={usuarios.nomeUsuario} />
        </div>
        <div className='form-input'>
            <select id='filialUsuario' className='field'
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
        <div className='form-input'>
            <select id='cCustoUsuario' className='field'
                onChange={handleInputChange}
                name="cCustoUsuario"
                value={usuarios.cCustoUsuario} >
                <option value='' disabled>
                    Escolha o Centro de Custo
                </option>
                {listaCCusto.map((x, indice) => (
                        <option key={indice}
                                value = {x.codigo}>
                                {x.codigo}
                          </option>
                    )
                )}
            </select>
        </div>
        <input type="submit" className='button' value='Salvar'/>
    </form>
)




