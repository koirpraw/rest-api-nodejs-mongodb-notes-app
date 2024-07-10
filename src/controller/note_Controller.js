const Note = require('../model/note')

exports.createNote = async (req, res) => {
    const date = new Date();
    const createdAtStamp = date.toLocaleString();
    try {
        let newNote = {
            title: req.body.title,
            description: req.body.description,
            is_liked: false,
            difficulty: 1,
            created_at: date
        };
        let result = await Note.insertNote(newNote);
        res.status(200).json(result)


    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        });

    }

}

exports.getAllNotes = async (req, res) => {
    try {
        const result = await Note.getAllNotes();
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving notes."
        });

    }

}

exports.getNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Note.getNoteById(req.params.id);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving note."
        });

    }

}

exports.updateNote = async (req, res) => {
    const date = new Date();
    const createdAtStamp = date.toLocaleString();
    try {
        const id = req.params.id;
        const { title, description, is_liked, difficulty } = req.body;

        const updatedNote = {
            title,
            description,
            is_liked,
            difficulty,
            created_at: createdAtStamp
        }
        const result = await Note.updateNote(id, updatedNote);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while updating note."
        });

    }

}

exports.deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Note.deleteNote(id);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while deleting note."
        });

    }

}

exports.deleteAllNotes = async (req, res) => {
    try {
        const result = await Note.deleteAllNotes();
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while deleting all notes."
        });

    }

}