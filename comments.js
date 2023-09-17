//create web server
//run this file using node comments.js
//open browser and type http://localhost:8080
//to stop the server press ctrl+c
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

var comments = [];
//comment
