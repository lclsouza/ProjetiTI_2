module.exports = (app) => {

    app.get('/fornecedores', (req, res) => {
        app.controllers.fornecedores.listarFornecedores(app,req,res)
    })

    app.post('/fornecedores', (req, res) => {
        app.controllers.fornecedores.incluirFornecedores(app,req,res)
    })

    app.get('/fornecedores/:id', (req, res) => {
        app.controllers.fornecedores.listarFornecedoresPorID(app,req,res)
    })

    app.put('/fornecedores/:id', (req, res) => {
        app.controllers.fornecedores.alterarFornecedoresPorID(app,req,res)
    })

    app.delete('/fornecedores/:id', (req, res) => {
        app.controllers.fornecedores.excluirFornecedoresPorID(app,req,res)
    })
}

