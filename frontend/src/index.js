import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Filial from './filial/appFilial'
import CCusto from './ccusto/appCCusto'
import Usuarios from './usuarios/appUsuarios'

import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


import './css/reset.css'
import './css/base.css'
import './css/menu.css'
import './css/cadastro-form.css'
import './css/cadastro-table.css'


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path='/'></Route>
            <Route path='/filial' component={Filial}></Route>
            <Route path='/ccusto' component={CCusto}></Route>
            <Route path='/usuarios' component={Usuarios}></Route>
        </App>
    </BrowserRouter>,
    document.getElementById('app')
) 
serviceWorker.unregister();

