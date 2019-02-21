require('dotenv').config()

const express = require("express");
const app = express();
const cors = require('cors')
const router = require('./routes');
const port = process.env.PORT || 3000;

var pg = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
});

app.use(express.json());
app.use('/',router);
app.use(cors({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':'application/json',
    'Access-Control-Allow-Headers':'[Content-Type, Authorization]'
}));

app.listen(port, () => console.log(`App listening from port ${port}`));