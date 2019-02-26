const express = require('express');
const app = express();

app.use('/crops', require('./routes'));

module.exports = app;