import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Filial from './filial/appFilial'
import CCusto from './ccusto/appCCusto'
import Usuarios from './usuarios/appUsuarios'
import Fornecedores from './fornecedores/appFornecedores'

import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path='/'></Route>
            <Route path='/filial' component={Filial}></Route>
            <Route path='/ccusto' component={CCusto}></Route>
            <Route path='/usuarios' component={Usuarios}></Route>
            <Route path='/fornecedores' component={Fornecedores}></Route>
        </App>
    </BrowserRouter>,
    document.getElementById('app')
) 
serviceWorker.unregister();

