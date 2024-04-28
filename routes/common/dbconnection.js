const mongodb = require("mongodb")

async function getDBConnection() {
    const url = "mongodb+srv://u1:u1@nextdb1.2eqp67o.mongodb.net/";
    const mongoClient = mongodb.MongoClient
    const server = await mongoClient.connect(url)
    const db = server.db("8amdb")
    return db;
}
module.exports = getDBConnection