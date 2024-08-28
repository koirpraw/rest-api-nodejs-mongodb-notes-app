const { connectDB } = require('../config/dbConfig')
const { ObjectId } = require('mongodb')


const tableName = 'notes';


const insertNote = async (newNote) => {
    let db = await connectDB();
    let collection = await db.collection(tableName);
    return await collection.insertOne(newNote);
}

const getAllNotes = async () => {
    let db = await connectDB();
    let collection = await db.collection(tableName);
    return await collection.find().toArray();
}

const getNoteById = async (id) => {
    let db = await connectDB();
    let collection = await db.collection(tableName);
    return await collection.findOne({ _id: new ObjectId(id) });
}

const updateNote = async (id, updatedNote) => {
    let db = await connectDB();
    let collection = await db.collection(this.tableName);
    return await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedNote });
}

const deleteNote = async (id) => {
    let db = await connectDB();
    let collection = await db.collection(tableName);
    return await collection.deleteOne({ _id: new ObjectId(id) });
}

const deleteAllNotes = async () => {
    let db = await connectDB();
    let collection = await db.collection(tableName);
    return await collection.deleteMany();
}




module.exports = { insertNote, getAllNotes, getNoteById, updateNote, deleteNote, deleteAllNotes };