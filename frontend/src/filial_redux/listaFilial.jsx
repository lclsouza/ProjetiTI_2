import React from 'react'
import { connect } from 'react-redux'

//const listaFilial = ({ filial, excluir, alterar }) => {
const listaFilial = (props) => {    

    const renderRows = () => {
        return props.list.map((filreg, index) => (
            
                <tr key={index}>
                    <td>{filreg.filial.codigoFilial}</td>
                    <td>{filreg.filial.nomeFilial}</td>
                    <td>{filreg.filial.cnpjFilial}</td>
                    <td> 
                        {/* <button onClick={() => excluir(filreg)}>Excluir</button> 
                        <button onClick={() => alterar(filreg)}>Alterar</button> */}
                    </td>
                </tr>
           ))
    }

    return (
        <table className='cadastro-table'>
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

const mapStateToProps = state => (
    {list: state.filialTI.list}
)

export default connect(mapStateToProps)(listaFilial)



    