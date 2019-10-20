var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function reject_callback_func(reject_error) {
    console.log('Error has occured ' + reject_error)
    throw reject_error;
    }

function resolve_callback_func() {
    console.log('resolve executed')
    }

function promise_callback_func(resolve_callback, reject_callback) {
    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db_conn) {
    if(err) reject_callback(err);
    else{
    var dbo = db_conn.db("EmployeeDB");
    var myobj = { "Employeeid" : "6", "Employee Name": "Highway 36" };
    dbo.collection("Employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db_conn.close();
    })}})}

    

let promise =  new Promise(promise_callback_func)
let resolve = promise.then(resolve_callback_func)
let catch1 = resolve.catch(reject_callback_func)    
