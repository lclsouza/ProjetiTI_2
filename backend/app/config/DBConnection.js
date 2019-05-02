const mongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').ObjectID
const servidor = 'localhost';
const porta = 27017;
const banco = 'projetoti';

class DBConnection {

    url() {
        return `mongodb://${servidor}:${porta}`
    }

    open(cb) {
        mongoClient.connect(this.url(), (error,client) => {
            if(client) {
                const db = client.db(banco)
                cb(null, db)
            } else(
                cb('Erro na conexao com o banco de dados', null)
            )
        })
    }

    getObjectID(id) {
        return new objectID(id)
    }
}

module.exports = () => {
    return DBConnection;
}