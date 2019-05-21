class FornecedoresDAO {
    
    constructor(connection) {
        this._connection = connection
    }

    listarFornecedores(cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('fornecedores').find({}).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            } else {
                cb(error, null)
            }
        })
    }

    listarFornecedoresPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('fornecedores').find({ _id: this._connection.getObjectID(id) }).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            }
        })
    }

    incluirFornecedores(dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('fornecedores').insert(dados) 
                    cb(null, 'Inclusão realizado com sucesso')
            } else {
                    cb('Não foi possível incluir os dados', null)
            }
        })
    }

    alterarFornecedoresPorID(id, dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('fornecedores').update({ _id: this._connection.getObjectID(id) }, dados) 
                    cb (null, 'Alterado') 
                } else { 
                    cb('Erro', null)
                }
            })
    }
    

    excluirFornecedoresPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('fornecedores').deleteOne({ _id: this._connection.getObjectID(id) }, (error, result) => {
                    return result ? cb(null, 'Fornecedor excluído') : cb('Fornecedor não excluído', null)
                })
            }
        })
    }
    
    
}

module.exports = () => {
    return FornecedoresDAO
}