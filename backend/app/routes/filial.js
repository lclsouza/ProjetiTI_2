module.exports = (app) => {

    app.get('/filial', (req, res) => {
        app.controllers.filial.listarFilial(app,req,res)
    })

    app.post('/filial', (req, res) => {
        app.controllers.filial.incluirFilial(app,req,res)
    })

    app.get('/filial/:id', (req, res) => {
        app.controllers.filial.listarFilialPorID(app,req,res)
    })

    app.put('/filial/:id', (req, res) => {
        app.controllers.filial.alterarFilialPorID(app,req,res)
    })

    app.delete('/filial/:id', (req, res) => {
        app.controllers.filial.excluirFilialPorID(app,req,res)
    })
}

