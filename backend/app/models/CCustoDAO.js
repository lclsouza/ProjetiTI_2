class CCustoDAO {
    
    constructor(connection) {
        this._connection = connection
    }

    listarCCusto(cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('ccusto').find({}).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            } else {
                cb(error, null)
            }
        })
    }

    listarCCustoPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('ccusto').find({ _id: this._connection.getObjectID(id) }).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            }
        })
    }

    incluirCCusto(dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('ccusto').insert(dados) 
                    cb(null, 'Inclusão realizado com sucesso')
            } else {
                    cb('Não foi possível incluir os dados', null)
            }
        })
    }

    alterarCCustoPorID(id, dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('ccusto').update({ _id: this._connection.getObjectID(id) }, dados) 
                    cb (null, 'Alterado') 
                } else { 
                    cb('Erro', null)
                }
            })
    }
    

    excluirCCustoPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('ccusto').deleteOne({ _id: this._connection.getObjectID(id) }, (error, result) => {
                    return result ? cb(null, 'excluído') : cb('Não excluído', null)
                })
            }
        })
    }
    
    
}

module.exports = () => {
    return CCustoDAO
}