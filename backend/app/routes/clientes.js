module.exports = (app) => {

    app.get('/clientes', (req, res) => {
        app.controllers.clientes.listarClientes(app,req,res)
    })

    app.post('/clientes', (req, res) => {
        app.controllers.clientes.incluirClientes(app,req,res)
    })

    app.get('/clientes/:id', (req, res) => {
        app.controllers.clientes.listarClientesPorID(app,req,res)
    })

    app.put('/clientes/:id', (req, res) => {
        app.controllers.clientes.alterarClientesPorID(app,req,res)
    })

    app.delete('/clientes/:id', (req, res) => {
        app.controllers.clientes.excluirClientesPorID(app,req,res)
    })
}

