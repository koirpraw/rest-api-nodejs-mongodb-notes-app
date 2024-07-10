const express = require('express');

const app = express();

const PORT = process.env.PORT || 4002;

const cors = require('cors')

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());

const notesRouter = require('./src/route/notes');

app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
    res.send("Welocme to the default route of notes app with Mongodb Driver");

})

app.listen(PORT, () => {
    console.log(`The Server is up and running . Currenlty running on port:${PORT} go to http://localhost:${PORT}`)
})

