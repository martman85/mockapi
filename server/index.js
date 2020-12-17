/* eslint-disable */
var path = require('path');
var express = require('express');
var app = express();
let cors = require('cors');
app.use(cors());

let users = require('./data/users.json');

app.get('/users', function (req, res) {
  res.json(users);
})

var dir = path.join(__dirname, 'images');

app.use(express.static(dir));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});