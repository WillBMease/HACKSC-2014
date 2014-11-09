// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.insert([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the document collection");
//     callback(result);
//   });
// }

// var databaseUrl = "mongodb://localhost:27017/test"; // "username:password@example.com/mydb"
// var databaseUrl = "mongodb://104.40.4.198:27017/test";
// var collections = ["test"]
// var db = require("mongojs").connect(databaseUrl, collections);

// var main = require('../app')

// db.test.save({user: "Will", type: "user"}, function(err, saved) {
//   if( err || !saved ) console.log("User not saved");
//   else console.log("User saved");
// });

// db.test.save({user: "Jeremy", type: "user"}, function(err, saved) {
//   if( err || !saved ) console.log("User not saved");
//   else console.log("User saved");
// });

// db.test.find({user: "Will"}, function(err, users) {
//   if( err || !users) console.log("No female users found");
//   else users.forEach( function(femaleUser) {
//     console.log(femaleUser);
//   } );
// });