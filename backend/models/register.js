const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

(async function initializeDatabase() {
    try {
        await client.connect();
        console.log("Connected to database");
    } catch (err) {
        console.error(`Failed to connect to the database - ${err}`);
    }
})();


async function addNewUser(name,email,phone,password) {
    const collection = client.db("backend_masters").collection('users');
    const result = await collection.insertOne({name: name, email: email, phone: phone, password: password});
    return result;
}

module.exports = {addNewUser};