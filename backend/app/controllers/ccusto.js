module.exports.listarCCusto = (app,req, res) => {
    connection = new app.config.DBConnection();
    ccustoDAO = new app.models.CCustoDAO(connection)
    ccustoDAO.listarCCusto((error,result) => {
        return result ? res.json(result) : res.json(error)
        })
}

module.exports.incluirCCusto = (app,req, res) => {
    connection = new app.config.DBConnection();
    ccustoDAO = new app.models.CCustoDAO(connection)
    const dados = req.body
    ccustoDAO.incluirCCusto(dados, (error,result) => {
       return result ? res.json(result) : res.json(error)
       })
}

module.exports.listarCCustoPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    ccustoDAO = new app.models.CCustoDAO(connection)
     const id = req.params.id
    ccustoDAO.listarCCustoPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.alterarCCustoPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    ccustoDAO = new app.models.CCustoDAO(connection)
    const dados = req.body
    const id = req.params.id
    ccustoDAO.alterarCCustoPorID(id, dados, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.excluirCCustoPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    ccustoDAO = new app.models.CCustoDAO(connection)
     const id = req.params.id
    ccustoDAO.excluirCCustoPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

