module.exports.listarFilial = (app,req, res) => {
    connection = new app.config.DBConnection();
    filialDAO = new app.models.FilialDAO(connection)
    filialDAO.listarFilial((error,result) => {
        return result ? res.json(result) : res.json(error)
        })
}

module.exports.incluirFilial = (app,req, res) => {
    connection = new app.config.DBConnection();
    filialDAO = new app.models.FilialDAO(connection)
    const dados = req.body
    filialDAO.incluirFilial(dados, (error,result) => {
       return result ? res.json(result) : res.json(error)
       })
}

module.exports.listarFilialPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    filialDAO = new app.models.FilialDAO(connection)
    const id = req.params.id
    filialDAO.listarFilialPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.alterarFilialPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    filialDAO = new app.models.FilialDAO(connection)
    const dados = req.body
    const id = dados.filial.id
    filialDAO.alterarFilialPorID(id, dados, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.excluirFilialPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    filialDAO = new app.models.FilialDAO(connection)
    const id = req.params.id
    filialDAO.excluirFilialPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

