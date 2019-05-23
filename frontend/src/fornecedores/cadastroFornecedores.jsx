import React from 'react'
import InputCustomizado from '.././components/InputCustomizado'

export default ({ handleAdd, handleInputChange, handleSearch, fornecedores, fornecedores2, handleClear }) => (
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
                    onChange={handleInputChange} name="hardware"
                     checked={fornecedores.tiposServicos.hardware}/>
            <label className="form-check-label" htmlFor="hardware">Hardware</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="software" 
                        onChange={handleInputChange} name="software"
                        checked={fornecedores.tiposServicos.software} />
            <label className="form-check-label" htmlFor="software">Software</label>
        </div>
    
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="rede" 
                        onChange={handleInputChange} name="rede"
                        checked={fornecedores.tiposServicos.rede} />
            <label className="form-check-label" htmlFor="rede">Rede</label>
        </div>
    
   
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="smartphone" 
                        onChange={handleInputChange} name="smartphone"
                        checked={fornecedores.tiposServicos.smartphone} />
            <label className="form-check-label" htmlFor="smartphone">Smartphone</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="telefonia" 
                        onChange={handleInputChange} name="telefonia"
                        checked={fornecedores.tiposServicos.telefonia} />
            <label className="form-check-label" htmlFor="telefonia">Telefonia</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="servidor" 
                        onChange={handleInputChange} name="servidor"
                        checked={fornecedores.tiposServicos.servidor} />
            <label className="form-check-label" htmlFor="servidor">Servidor</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="infraestrutura" 
                        onChange={handleInputChange} name="infraestrutura"
                        checked={fornecedores.tiposServicos.infraestrutura} />
            <label className="form-check-label" htmlFor="infraestrutura">Infraestrutura</label>
        </div>

       <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="internet" 
                        onChange={handleInputChange} name="internet"
                        checked={fornecedores.tiposServicos.internet} />
            <label className="form-check-label" htmlFor="internet">Internet</label>
        </div>

        <p></p>
        
        <input type="submit" className='btn btn-primary' value='Salvar'/>
        <button type="button" className='btn btn-primary ml-4' onClick={handleClear}>Voltar</button>
    </form>
)




