import React from 'react'

export default ({ ccusto, handleDelete, handleChange }) => {

    const renderRows = () => {
        return ccusto.map((ccustoReg, index) => (
            
                <tr key={index}>
                    <td>{ccustoReg.ccusto.codigoCCusto}</td>
                    <td>{ccustoReg.ccusto.nomeCCusto}</td>
                     <td>{ccustoReg.ccusto.filialCCusto}</td>
                    <td> 
                        <button onClick={() => handleDelete(ccustoReg)}>Excluir</button> 
                        <button onClick={() => handleChange(ccustoReg)}>Alterar</button>
                    </td>
                </tr>
           ))
    }

    return (
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nome Centro de Custo</th>
                    <th>Filial</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
            
        </table>
    )

}

    