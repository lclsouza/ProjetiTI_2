
import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div className="content">
        <div className="aside">
            <nav className="menu-sidebar">
                <h1 className="title">Inventário de TI</h1>
                <ul className='list'>
                    <li><Link to='/filial' className='link'>Filial</Link></li>
                    <li><Link to='/ccusto' className='link'>Centro de Custo</Link></li>
                    <li><Link to='/usuarios' className='link'>Usuários</Link></li>
                    <li><Link to='/tipoInventario' className='link'>Tipo de Inventário</Link></li>
                    <li><Link to='/fornecedor' className='link'>Fornecedor</Link></li>
                    <li><Link to='/inventarios' className='link'>Inventários</Link></li>
                    <li><Link to='/manutencao' className='link'>Equip.Manutenção</Link></li>
                    <li><Link to='/transferencia' className='link'>Transf. Equipamentos</Link></li>
                    <li><Link to='/servicos' className='link'>Serviços Contratados</Link></li>
                    <li><Link to='/cancelamento' className='link'>Cancelamento Serviços</Link></li>
                    <li><Link to='/relatorios' className='link'>Relatórios</Link></li>
                </ul>
            </nav>
        </div>
        <div className="main">
            {props.children}
        </div>
    </div>
)

