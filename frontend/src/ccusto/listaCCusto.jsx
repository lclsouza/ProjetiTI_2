import React from 'react'

export default ({ ccusto, excluir, alterar }) => {

    const renderRows = () => {
        return ccusto.map((filreg, index) => (
            
                <tr key={index}>
                    <td>{filreg.ccusto.codigo}</td>
                    <td>{filreg.ccusto.nomeCCusto}</td>
                     <td>{filreg.ccusto.filial}</td>
                    <td> 
                        <button onClick={() => excluir(filreg)}>Excluir</button> 
                        <button onClick={() => alterar(filreg)}>Alterar</button>
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

    