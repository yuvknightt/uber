require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connecToDb = require('./db/db');
app.use(cors());


connecToDb();
app.get('/', (req, res) => {
    res.send('hELLO');
});

module.exports = app;
