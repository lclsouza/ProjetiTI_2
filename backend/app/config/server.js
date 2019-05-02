const express = require('express');
const consign = require('consign');
const allowCors = require('./cors')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(allowCors)

consign({cwd: 'app'})
    .include('routes')
    .then('config/DBConnection.js')
    .then('controllers')
    .then('models')
    .into(app);

module.exports = app;