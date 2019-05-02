import React from 'react'

export default ({ adicionar, handleInputChange, usuarios, listaFilial, listaCCusto }) => (
    <form className='cadastro-form' onSubmit={adicionar}>
        <h2 className='h2'>Cadastro de Usuários</h2>
        <div className="input-group mb-3">
        <input id='loginUsuario' className='form-control'
                placeholder='Login do Usuário'
                name="loginUsuario"
                onChange={handleInputChange}
                value={usuarios.loginUsuario} />
            <div className="input-group-append" id="button-addon4">
                <button className="btn btn-outline-secondary" type="button">Cadastrar</button>
                <button className="btn btn-outline-secondary" type="button">Pesquisar</button>
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
<<<<<<< HEAD
        <div className='form-input'>
            <select id='cCustoUsuario' className='field'
=======
         <div className='form-group'>
            <input id='cCustoUsuario' className='form-control'
                placeholder='Nome do Centro de Custo'
>>>>>>> 73d227b6b41a30f6e863b2b3aa197daceb92a2fd
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
        <input type="submit" className='btn btn-primary' value='Salvar'/>
        <input type="submit" className='btn btn-primary ml-4' value='Voltar' />
    </form>
)




