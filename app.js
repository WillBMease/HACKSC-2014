

// var myotest = require('./myotest.js');
// var Myo = require('myo');
// var myMyo = Myo.create();
// var test = require('../public/myotest.js')

var express = require('express');
var app = express();

// var http = require('http')
  // , server = http.createServer(app)
// var io = require('socket.io').listen(server);

// var io = require('socket.io').listen(app.listen(8888));

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'public/*.js'
    ]
  });
};

app.get('/', function(req, res) {
   res.sendfile('./index.html');
});

app.use(express.static('public'));

app.listen(8888);
// server.listen(8888)
console.log('Listening on port 8888');


process.on('uncaughtException', function (err) {
    console.log(err);
}); 


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb');

var databaseUrl = "mongodb://localhost:27017/mydb"; // "username:password@example.com/mydb"
var collections = ["testData"]
var db = require("mongojs").connect(databaseUrl, collections);

db.testData.save({user: "Will", type: "user"}, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});

db.testData.save({user: "Jeremy", type: "user"}, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});

db.testData.find({type: "user"}, function(err, users) {
  if( err || !users) console.log("No female users found");
  else users.forEach( function(femaleUser) {
    console.log(femaleUser);
  } );
});

// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// Connection URL
// var url = 'mongodb://localhost:27017/mydb';
// Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   insertDocuments(db, function() {
//   //   updateDocument(db, function() {
//   //     removeDocument(db, function() {
//         findDocuments(db, function() {
//           db.close();
//         });
//   //     });
//   //   });
//   });
// // console.log(db)

// // db.close()
// });

// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('testData');
//   // // Insert some documents
//   // collection.insert([
//   //   {a : 1}, {a : 2}, {a : 3}
//   // ], function(err, result) {
//   //   assert.equal(err, null);
//   //   assert.equal(3, result.result.n);
//   //   assert.equal(3, result.ops.length);
//   //   console.log("Inserted 3 documents into the document collection");
//   //   callback(result);
//   // });

// collection.save({_id:"abc", user:"David"},{w:1}, callback)
// }

// // var updateDocument = function(db, callback) {
// //   // Get the documents collection
// //   var collection = db.collection('documents');
// //   // Insert some documents
// //   collection.update({ a : 2 }
// //     , { $set: { b : 1 } }, function(err, result) {
// //     assert.equal(err, null);
// //     assert.equal(1, result.result.n);
// //     console.log("Updated the document with the field a equal to 2");
// //     callback(result);
// //   });  
// // }

// // var removeDocument = function(db, callback) {
// //   // Get the documents collection
// //   var collection = db.collection('documents');
// //   // Insert some documents
// //   collection.remove({ a : 3 }, function(err, result) {
// //     assert.equal(err, null);
// //     assert.equal(1, result.result.n);
// //     console.log("Removed the document with the field a equal to 3");
// //     callback(result);
// //   });    
// // }

// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('testData');
//   // Find some documents
//   // collection.find({}).toArray(function(err, docs) {
//   //   assert.equal(err, null);
//   //   assert.equal(6, docs.length);
//   //   console.log("Found the following records");
//   //   console.dir(docs)
//   //   callback(docs);
//   // });      

//   	DBCursor cursor = collection.find();
// 	while(cursor.hasNext()) {
// 	    System.out.println(cursor.next());
// 	}
// }
// // io.on('connection', function(socket){
// // 	console.log('a user connected');
// // 	socket.on('disconnect', function(){
// // 		console.log('user disconnected');
// // 	});
// // 	socket.on('test', function(msg){
// // 		io.emit('test', msg) ;
// // 		console.log(msg) ;
// // 	});
// // 	// socket.on('osc off', function(msg){
// // 	// 	io.emit('osc off', msg) ;
// // 	// 	console.log(msg) ;
// // 	// });
// // 	// 	socket.on('sample on', function(msg){
// // 	// 	io.emit('sample on', msg) ;
// // 	// 	console.log(msg) ;
// // 	// });

// // });

// // io.sockets.on('connection', function (socket) {
// // 	console.log(socket)
// //     socket.emit('message', { message: 'welcome to the chat' });
// //     socket.on('send', function (data) {
// //         io.sockets.emit('message', data);
// //     });
// // });

// // io.sockets.on('connection', function (socket) { // First connection
// // 	// users += 1; // Add 1 to the count
// // 	// reloadUsers(); // Send the count to all the users
// // 	socket.on('message', function (data) { // Broadcast the message to all
// // 			socket.broadcast.emit('message', "hi");
// // 	});
// // 	socket.on('disconnect', function () { // Disconnection of the client
// // 		// users -= 1;
// // 		// reloadUsers();
// // 	});
// // });