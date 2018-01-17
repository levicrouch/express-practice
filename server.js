// require express
// declare and initialize express as the variable "express"
var express = require("express");
// declare and initialize body parser
var bodyParser = require("body-parser");

// create a variable named app that runs express
var app = express();

// specify a port to run the server on
var PORT = 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes from apiRoutes and give the server access to them.
require("./apiRoutes.js")(app);

// initiate the listener and output that we are running on a specific port
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });