const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

const app = express()

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 6800; // set our port

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ambient_db'); // connect to our database

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("DB connection alive");
});

const router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});


app.use('/api/coordinates', require('./routes/coordinate'));

app.listen(port);
console.log('Magic happens on port ' + port);