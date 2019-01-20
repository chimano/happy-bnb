const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config();

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

mongoose.connect('mongodb://mongo:27017');

app.get('/', (req, res) => {
    res.send('boom');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
