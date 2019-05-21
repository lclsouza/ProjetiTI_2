import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ handleAdd, handleInputChange, handleInputChange2, handleSearch, fornecedores, fornecedores2, handleClear }) => (
    <form className='cadastro-form' onSubmit={handleAdd}>
        <h2 className='h2'>Cadastro de Fornecedores</h2>
        <div id='mensagemView'></div>
        <div className="input-group mb-3">
        <input id='loginUsuario' className='form-control'
                placeholder='Código do Fornecedor'
                name="codigoFornecedor"
                onChange={handleInputChange}
                value={fornecedores.codigoFornecedor} />
        </div>

        <div className="input-group mb-3">
    
            <InputCustomizado id="nomeFornecedor" type="text" className='form-control' placeholder='Nome do Fornecedor'
                name="nomeFornecedor" value={fornecedores.nomeFornecedor} onChange={handleInputChange} />
            <div className="input-group-append" id="button-addon4">
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
            <input id='contato' className='form-control'
                placeholder='Digite o contato'
                onChange={handleInputChange}
                name="contato"
                value={fornecedores.contato} />
        </div>

        <div className='form-group'>
            <input id='telefone' className='form-control'
                placeholder='Digite o Telefone'
                onChange={handleInputChange}
                name="telefone"
                value={fornecedores.telefone} />
        </div>
        <div className='form-group'>
            <input id='email' className='form-control'
                placeholder='Digite o e-mail'
                onChange={handleInputChange}
                name="email"
                value={fornecedores.email} />
        </div>
        <div className='form-group'>
            <input id='observacao' className='form-control'
                placeholder='Digite uma Observacao'
                onChange={handleInputChange}
                name="observacao"
                value={fornecedores.observacao} />
        </div>

        <div className='form-check form-check-inline'>
            <input className="form-check-input" type="checkbox" id="hardware" 
                    onChange={handleInputChange2} name="hardware"
                     checked={fornecedores2.hardware}
                      />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Hardware</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.software" 
                        onChange={handleInputChange} name="software"
                        value={fornecedores2.software} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Software</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.rede" 
                        onChange={handleInputChange} name="rede"
                        value={fornecedores2.rede} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Rede</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.smartphone" 
                        onChange={handleInputChange} name="smartphone"
                        value={fornecedores2.smartphone} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Smartphone</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.telefonia" 
                        onChange={handleInputChange} name="telefonia"
                        value={fornecedores2.telefonia} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Telefonia</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.servidor" 
                        onChange={handleInputChange} name="servidor"
                        value={fornecedores2.servidor} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Servidor</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.infraestrutura" 
                        onChange={handleInputChange} name="infraestrutura"
                        value={fornecedores2.infraestrutura} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Infraestrutura</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="fornecedores.tiposServicos.internet" 
                        onChange={handleInputChange} name="internet"
                        value={fornecedores2.internet} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Internet</label>
        </div>

        <p></p>
        
        <input type="submit" className='btn btn-primary' value='Salvar'/>
        <button type="button" className='btn btn-primary ml-4' onClick={handleClear}>Voltar</button>
    </form>
)




