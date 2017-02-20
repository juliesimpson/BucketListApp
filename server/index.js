var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json({ type: "*/*" }));

var port = process.env.PORT || 3000;

// creates a node server
// var server = http.createServer();   
var server = http.createServer(app);

server.listen(port);
console.log("Server listening on " + port);