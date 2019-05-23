import React from 'react'

export default ({ fornecedor, handleDelete, handleChange }) => {

    const renderRows = () => {
        return fornecedor.map((fornecedoresReg, index) => (
            
                <tr key={index}>
                    <td>{fornecedoresReg.fornecedores.codigoFornecedor}</td>
                    <td>{fornecedoresReg.fornecedores.nomeFornecedor}</td>
                    <td>{fornecedoresReg.fornecedores.contato}</td>
                     <td>{fornecedoresReg.fornecedores.telefone}</td>
                     <td>{fornecedoresReg.fornecedores.email}</td>
                     <td>{fornecedoresReg.fornecedores.observacao}</td>
                    <td> 
                        <button onClick={() => handleDelete(fornecedoresReg)}>Excluir</button> 
                        <button onClick={() => handleChange(fornecedoresReg)}>Alterar</button>
                    </td>
                </tr>
           ))
    }

    return (
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th>Código Fornecedor</th>
                    <th>Nome Fornecedor</th>
                    <th>Contato</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Observacao</th>                    
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
            
        </table>
    )

}

// codigoFornecedor: '',
// nomeFornecedor: '',
// telefone: '',
// email: '',
// observacao: '',
    