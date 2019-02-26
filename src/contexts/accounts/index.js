const express = require('express');
const app = express();

app.use('/accounts', require('./routes'));

module.exports = app;