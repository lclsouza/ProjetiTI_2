module.exports = (app) => {

    app.get('/ccusto', (req, res) => {
        app.controllers.ccusto.listarCCusto(app,req,res)
    })

    app.post('/ccusto', (req, res) => {
        app.controllers.ccusto.incluirCCusto(app,req,res)
    })

    app.get('/ccusto/:id', (req, res) => {
        app.controllers.ccusto.listarCCustoPorID(app,req,res)
    })

    app.put('/ccusto', (req, res) => {
        app.controllers.ccusto.alterarCCustoPorID(app,req,res)
    })

    app.delete('/ccusto/:id', (req, res) => {
        app.controllers.ccusto.excluirCCustoPorID(app,req,res)
    })
}

