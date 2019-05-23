import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div className="container-fluid">
        <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to='/' className='nav-link active'>Ormec Engenharia</Link>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Inventário de TI</span>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item"><Link to='/filial' className='nav-link'>Filial</Link></li>
                        <li className="nav-item"><Link to='/ccusto' className='nav-link'>Centro de Custo</Link></li>
                        <li className="nav-item"><Link to='/usuarios' className='nav-link'>Usuários</Link></li>
                        <li className="nav-item"><Link to='/fornecedores' className='nav-link'>Fornecedor</Link></li>
                        <li className="nav-item"><Link to='/inventarios' className='nav-link'>Inventários</Link></li>
                        <li className="nav-item"><Link to='/manutencao' className='nav-link'>Equip.Manutenção</Link></li>
                        <li className="nav-item"><Link to='/transferencia' className='nav-link'>Transf. Equipamentos</Link></li>
                        <li className="nav-item"><Link to='/servicos' className='nav-link'>Serviços Contratados</Link></li>
                        <li className="nav-item"><Link to='/cancelamento' className='nav-link'>Cancelamento Serviços</Link></li>
                        <li className="nav-item"><Link to='/relatorios' className='nav-link'>Relatórios</Link></li>
                    </ul>
                </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {props.children}
            </main>
        </div>
    </div>
)

