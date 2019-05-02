class UsuariosDAO {
    
    constructor(connection) {
        this._connection = connection
    }

    listarUsuarios(cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('usuarios').find({}).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            } else {
                cb(error, null)
            }
        })
    }

    listarUsuariosPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('usuarios').find({ _id: this._connection.getObjectID(id) }).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            }
        })
    }

    incluirUsuarios(dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('usuarios').insertOne(dados) 
                    cb(null, 'Inclusão realizado com sucesso')
            } else {
                    cb('Não foi possível incluir os dados', null)
            }
        })
    }

    alterarUsuariosPorID(id, dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('usuarios').update({ _id: this._connection.getObjectID(id) }, dados) 
                    cb (null, 'Alterado') 
                } else { 
                    cb('Erro', null)
                }
            })
    }
    

    excluirUsuariosPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('usuarios').deleteOne({ _id: this._connection.getObjectID(id) }, (error, result) => {
                    return result ? cb(null, 'excluído') : cb('não excluído', null)
                })
            }
        })
    }
    
    
}

module.exports = () => {
    return UsuariosDAO
}