require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri);
let connection;

const connectDB = async () => {
    try {
        connection = await client.connect();
        console.log("successfully connected to MongoDB")


    } catch (error) {
        console.log(error)


    }
    return connection.db("flashcardDB");
}

module.exports = { connectDB };