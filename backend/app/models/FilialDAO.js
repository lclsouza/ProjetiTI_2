class FilialDAO {
    
    constructor(connection) {
        this._connection = connection
    }

    listarFilial(cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('filial').find({}).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            } else {
                cb(error, null)
            }
        })
    }

    listarFilialPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('filial').find({ _id: this._connection.getObjectID(id) }).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            }
        })
    }

    incluirFilial(dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('filial').insert(dados) 
                    cb(null, 'Inclusão realizado com sucesso')
            } else {
                    cb('Não foi possível incluir os dados', null)
            }
        })
    }

    alterarFilialPorID(id, dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('filial').update({ _id: this._connection.getObjectID(id) }, dados) 
                    cb (null, 'Alterado') 
                } else { 
                    cb('Erro', null)
                }
            })
    }
    

    excluirFilialPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('filial').deleteOne({ _id: this._connection.getObjectID(id) }, (error, result) => {
                    return result ? cb(null, 'excluído') : cb('não excluído', null)
                })
            }
        })
    }
    
    
}

module.exports = () => {
    return FilialDAO
}