var fs = require("fs");
function fun1(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
 }
fs.readFile('text1.txt', fun1);
console.log("Program Endd");