module.exports.listarUsuarios = (app,req, res) => {
    connection = new app.config.DBConnection();
    usuariosDAO = new app.models.UsuariosDAO(connection)
    usuariosDAO.listarUsuarios((error,result) => {
        return result ? res.json(result) : res.json(error)
        })
}

module.exports.incluirUsuarios = (app,req, res) => {
    connection = new app.config.DBConnection();
    usuariosDAO = new app.models.UsuariosDAO(connection)
    const dados = req.body
    usuariosDAO.incluirUsuarios(dados, (error,result) => {
       return result ? res.json(result) : res.json(error)
       })
}

module.exports.listarUsuariosPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    usuariosDAO = new app.models.UsuariosDAO(connection)
    const id = req.params.id
    usuariosDAO.listarUsuariosPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.alterarUsuariosPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    usuariosDAO = new app.models.UsuariosDAO(connection)
    const dados = req.body
    const id = dados.usuarios.id
    usuariosDAO.alterarUsuariosPorID(id, dados, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

module.exports.excluirUsuariosPorID = (app, req, res) => {
    connection = new app.config.DBConnection();
    usuariosDAO = new app.models.UsuariosDAO(connection)
    const id = req.params.id
    usuariosDAO.excluirUsuariosPorID(id, (error, result) => {
        return result ? res.json(result) : res.json(error)    
    })
}

