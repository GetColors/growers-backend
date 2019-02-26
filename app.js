require('dotenv').config();
require('reflect-metadata');

const express =  require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const typeorm = require("typeorm");
const databaseConfig = require('./database/config');

typeorm.createConnection(databaseConfig)
  .then(
    response => console.log("Connection was successfully created"),
    error => console.log(error)
    );

const modules = require('./src/contexts/index');

const app = express();
app.use(helmet());
app.use(morgan('dev'));

app.use(parser.json());

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to growers backend.',
    status : 'Ready!',
  });
});
app.use('', modules);

module.exports = app;