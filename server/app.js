require('dotenv').config()

const express               = require('express');
const PORT                  = 8080;
const HOST                  = '0.0.0.0';
const rentals               = require('./db/rentalGateway')

const app                   = express();


app.get('/', (req, res) => {
    res.send('Back-end up and running');
}); 

app.get('/rentals', (req, res) => {
    var c = req.query.category;
    rentals.getAllRentals(c, result => {
        if (result.length === 0){
            res.status(200).send({
                message: 'No items in collection'
            });
        } else if (result.length !== 0){
            res.status(200).send({
                result: result
            });
        } else {
            res.status(500).send({
                message: 'Internal server error, check your permissions to request this db'
            });
        }   
        return;
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
