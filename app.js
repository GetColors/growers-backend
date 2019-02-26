require('dotenv').config();

const express =  require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to growers backend',
    status : 'Ready!',
  });
});

app.use('', require('./src/contexts/index'));

module.exports = app;