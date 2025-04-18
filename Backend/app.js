require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connecToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')


connecToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('hELLO');
});

app.use('/users',userRoutes);

module.exports = app;
