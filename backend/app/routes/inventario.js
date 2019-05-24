module.exports = (app) => {

    app.get('/inventario', (req, res) => {
        app.controllers.inventario.listarInventario(app,req,res)
    })

    app.post('/inventario', (req, res) => {
        app.controllers.inventario.incluirInventario(app,req,res)
    })

    app.get('/inventario/:id', (req, res) => {
        app.controllers.inventario.listarInventarioPorID(app,req,res)
    })

    app.put('/inventario/:id', (req, res) => {
        app.controllers.inventario.alterarInventarioPorID(app,req,res)
    })

    app.delete('/inventario/:id', (req, res) => {
        app.controllers.inventario.excluirInventarioPorID(app,req,res)
    })
}

