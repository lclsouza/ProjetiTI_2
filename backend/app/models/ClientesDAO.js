class ClientesDAO {
    
    constructor(connection) {
        this._connection = connection
    }

    listarClientes(cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('clientes').find({}).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            } else {
                cb(error, null)
            }
        })
    }

    listarClientesPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('clientes').find({ _id: this._connection.getObjectID(id) }).toArray((error, result) => {
                    return result ? cb(null, result) : cb(error, null)
                })
            }
        })
    }

    incluirClientes(dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('clientes').insert(dados) 
                    cb(null, 'Inclusão realizado com sucesso')
            } else {
                    cb('Não foi possível incluir os dados', null)
            }
        })
    }

    alterarClientesPorID(id, dados, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('clientes').update({ _id: this._connection.getObjectID(id) }, dados) 
                    cb (null, 'Alterado') 
                } else { 
                    cb('Erro', null)
                }
            })
    }
    

    excluirClientesPorID(id, cb) {
        this._connection.open((error, db) => {

            if (db) {
                db.collection('clientes').deleteOne({ _id: this._connection.getObjectID(id) }, (error, result) => {
                    return result ? cb(null, 'Cliente excluído') : cb('Cliente não excluído', null)
                })
            }
        })
    }
    
    
}

module.exports = () => {
    return ClientesDAO
}