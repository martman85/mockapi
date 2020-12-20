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
app.get('/users/:id', function (req, res) {
  res.json(users.filter(user => user.id == req.params.id)[0]);
  return;
})

var dir = path.join(__dirname, 'images');

app.use(express.static(dir));

app.listen(3001, function () {
    console.log('Listening on http://localhost:3000/');
});