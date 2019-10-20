var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url).then(function(err, db) {
//   if (err) throw err;
  var dbo = db.db("EmployeeDB");
  var myquery = { "Employeeid": "5" };
  var newvalues = { $set: {"Employee Name": "Mickey 55" } };
  dbo.collection("Employee").updateOne(myquery, newvalues);
});
