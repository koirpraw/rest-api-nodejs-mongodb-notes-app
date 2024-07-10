const { connectDB } = require('../config/dbConfig')
const { ObjectId } = require('mongodb')

class Note {
    static tableName = 'notes';


    constructor(note) {
        this.title = note.title;
        this.description = note.description;
        this.isLiked = note.isLiked;
        this.difficulty = note.difficulty;
        this.createdAt = note.createdAt;

    }

    static insertNote = async (newNote) => {
        let db = await connectDB();
        let collection = await db.collection(this.tableName);
        return await collection.insertOne(newNote);
    }

    static getAllNotes = async () => {
        let db = await connectDB();
        let collection = await db.collection(this.tableName);
        return await collection.find().toArray();
    }

    static getNoteById = async (id) => {
        let db = await connectDB();
        let collection = await db.collection(this.tableName);
        return await collection.findOne({ _id: new ObjectId(id) });
    }

    static updateNote = async (id, updatedNote) => {
        let db = await connectDB();
        let collection = await db.collection(this.tableName);
        return await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedNote });
    }

    static deleteNote = async (id) => {
        let db = await connectDB();
        let collection = await db.collection(this.tableName);
        return await collection.deleteOne({ _id: new ObjectId(id) });
    }

    static deleteAllNotes = async () => {
        let db = await connectDB();
        let collection = await db.collection(this.tableName);
        return await collection.deleteMany();
    }


}

module.exports = Note;