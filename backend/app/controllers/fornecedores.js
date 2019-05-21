module.exports.listarFornecedores = (app,req, res) => {
    connection = new app.config.DBConnection();
    fornecedoresDAO = new app.models.FornecedoresDAO(connection)
    fornecedoresDAO.listarFornecedores((error,result) => {
        return result ? res.json(result) : res.json(error)
        })
}

module.exports.incluirFornecedores = (app,req, res) => {
    connection = new app.config.DBConnection();
    fornecedoresDAO = new app.models.FornecedoresDAO(connection)
    const dados = req.body
    fornecedoresDAO.incluirFornecedores(dados, (error,result) => {
       return result ? res.json(result) : res.json(error)
       })
}

module.exports.listarFornecedoresPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    fornecedoresDAO = new app.models.FornecedoresDAO(connection)
    const id = req.params.id
    fornecedoresDAO.listarFornecedoresPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.alterarFornecedoresPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    fornecedoresDAO = new app.models.FornecedoresDAO(connection)
    const dados = req.body
    const id = req.params.id
    fornecedoresDAO.alterarFornecedoresPorID(id, dados, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.excluirFornecedoresPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    fornecedoresDAO = new app.models.FornecedoresDAO(connection)
     const id = req.params.id
    fornecedoresDAO.excluirFornecedoresPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

