const express       = require('express');
const mongoose      = require('mongoose');
// require('dotenv').config();

const PORT          = 8080;
const HOST          = '0.0.0.0';
const MONGO_DOCKER  = 'mongodb://mongo:27017'

const app           = express();

mongoose.connect(MONGO_DOCKER);

app.get('/', (req, res) => {
    res.send('Back-end up and running');
}); 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
