const mongodb = require("mongodb");
const getDBConnection = require("../common/dbconnection")

async function saveUserDAO(data) {
    try {

        const db = await getDBConnection();
        const collection = db.collection("users")
        const result = await collection.insertOne(data)
        console.log("getUserDAOjjjjjjjjjjjjjj", data)
        return result;

    } catch (e) {
        console.error("saveUserDAO error", e)
    }
}

async function getUserDAO() {
    const db = await getDBConnection();
    const collection = db.collection("users");
    const result = await collection.find({}).toArray();
    return result;
}

module.exports = {
    saveUserDAO,
    getUserDAO
};