const express = require('express');
const app = express();

const router = express.Router();

const noteController = require('../controller/noteController');

router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getNoteById);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);
router.delete('/', noteController.deleteAllNotes);

module.exports = router;