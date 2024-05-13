const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


async function emailExists(email) {
    result = await fetchDetails(email);
    return result !== null;
}

async function fetchDetails(email) {
    const collection = client.db("backend_masters").collection('users');
    const result = await collection.findOne({email: email});
    return result;
}


module.exports = {emailExists, fetchDetails};