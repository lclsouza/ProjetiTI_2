module.exports.listarClientes = (app,req, res) => {
    connection = new app.config.DBConnection();
    clientesDAO = new app.models.ClientesDAO(connection)
    clientesDAO.listarClientes((error,result) => {
        return result ? res.json(result) : res.json(error)
        })
}

module.exports.incluirClientes = (app,req, res) => {
    connection = new app.config.DBConnection();
    clientesDAO = new app.models.ClientesDAO(connection)
    const dados = req.body
    clientesDAO.incluirClientes(dados, (error,result) => {
       return result ? res.json(result) : res.json(error)
       })
}

module.exports.listarClientesPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    clientesDAO = new app.models.ClientesDAO(connection)
     const id = req.params.id
    clientesDAO.listarClientesPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.alterarClientesPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    clientesDAO = new app.models.ClientesDAO(connection)
    const dados = req.body
    const id = req.params.id
    clientesDAO.alterarClientesPorID(id, dados, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.excluirClientesPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    clientesDAO = new app.models.ClientesDAO(connection)
     const id = req.params.id
    clientesDAO.excluirClientesPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

