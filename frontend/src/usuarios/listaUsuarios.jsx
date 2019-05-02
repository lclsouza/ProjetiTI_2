import React from 'react'

export default ({ usuarios, excluir, alterar }) => {

    const renderRows = () => {
        return usuarios.map((usuariosReg, index) => (
            
                <tr key={index}>
                    <td>{usuariosReg.usuarios.loginUsuario}</td>
                    <td>{usuariosReg.usuarios.nomeUsuario}</td>
                    <td>{usuariosReg.usuarios.filialUsuario}</td>
                     <td>{usuariosReg.usuarios.cCustoUsuario}</td>
                    <td> 
                        <button onClick={() => excluir(usuariosReg)}>Excluir</button> 
                        <button onClick={() => alterar(usuariosReg)}>Alterar</button>
                    </td>
                </tr>
           ))
    }

    return (
        <table className='cadastro-table'>
            <thead>
                <tr>
                    <th>Login Usuário</th>
                    <th>Nome Usuário</th>
                    <th>Filial Usuário</th>
                    <th>C.Custo Usuário</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
            
        </table>
    )

}

    