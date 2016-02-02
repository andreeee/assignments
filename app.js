var express = require('express');
var mu = require('mu2');
var app = express();
var helper = require('./week1/index.js')
var fibrous = require('fibrous');

mu.root = __dirname + '/week1/';

app.use(fibrous.middleware);

app.get('/', function (req, res){
  var stream = mu.compileAndRender('template.mustache', {link: helper.instagram()})
    stream.pipe(res)
}).listen(3000);
console.log("Running on port 3000")
