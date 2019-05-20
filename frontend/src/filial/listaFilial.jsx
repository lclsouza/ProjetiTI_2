import React from 'react'

export default ({ filial, handleDelete, handleChange }) => {

    const renderRows = () => {
        return filial.map((filreg, index) => (
            
                <tr key={index}>
                    <td>{filreg.filial.codigoFilial}</td>
                    <td>{filreg.filial.nomeFilial}</td>
                    <td>{filreg.filial.cnpjFilial}</td>
                    <td> 
                        <button onClick={() => handleDelete(filreg)}>Excluir</button> 
                        <button onClick={() => handleChange(filreg)}>Alterar</button>
                    </td>
                </tr>
           ))
    }

    return (
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nome Filial</th>
                    <th>CNPJ</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
            
        </table>
    )

}

    