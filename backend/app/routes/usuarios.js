module.exports = (app) => {

    app.get('/usuarios', (req, res) => {
        app.controllers.usuarios.listarUsuarios(app,req,res)
    })

    app.post('/usuarios', (req, res) => {
        console.log('Cheguei na rota')
        app.controllers.usuarios.incluirUsuarios(app,req,res)
    })

    app.get('/usuarios/:id', (req, res) => {
        app.controllers.usuarios.listarUsuariosPorID(app,req,res)
    })

    app.put('/usuarios', (req, res) => {
        app.controllers.usuarios.alterarUsuariosPorID(app,req,res)
    })

    app.delete('/usuarios/:id', (req, res) => {
        app.controllers.usuarios.excluirUsuariosPorID(app,req,res)
    })
}

