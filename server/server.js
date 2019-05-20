/* eslint-disable no-console */
require('dotenv').config();
process.env.NODE_ENV = 'production';
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var compression = require('compression');
var mongodb = require("mongodb");

var FISH_COLLECTION = "fish";
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;
var app = express();

//routes
//var fish = require('./routes/fish-route.js');

//database
var db;
var connection = process.env.MONGODB_URI
mongodb.MongoClient.connect(connection, function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Save database object from the callback for reuse.
  db = client.db('tail');
  console.log("Database connection ready");
});

//middleware
app.use(bodyParser.json());
app.use(compression());
app.use(express.static('../client/build'));

app.set('port', (process.env.PORT || 5000));

app.post('/fish', function(req, res){
	var fish = req.body;
  fish.caughtDate = new Date();
  db.collection(FISH_COLLECTION).insertOne(fish, function(err, doc) {
    if (err) {
      console.log(res, err.message, "Failed to create new fish.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
})

app.get('/fish', function(req, res){
    console.log('called');
	db.collection(FISH_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      console.log(res, err.message, "Failed to get fish.");
    } else {
      res.status(200).json(docs);
    }
  });
})

app.delete('/fish', (req, res) => {
  db.collection(FISH_COLLECTION).drop((err, docs) => {
    if (err) {
      console.log(res, err.message, "Failed to delete fish.");
    } else {
      res.status(200).json(docs);
    }
  })
  console.log('deleted' + FISH_COLLECTION)
})

app.get('/', function(req, res){
	res.sendFile(path.join('../client/build/index.html'));
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});