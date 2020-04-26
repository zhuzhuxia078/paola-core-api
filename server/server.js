const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const apiRouter = require('./apiRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  console.log('pong');
  res.json('pong');
});

module.exports = app;
