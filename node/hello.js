var http = require('http');

var header = {'Content-Type': 'text/html'}
function fun1(req, res) 
{
    res.writeHead(200, header);
    res.end('Hello World!');
}
function fun2(str1)
{
    console.log("nikhil gupta")
}
fun2("ddd")
// var server = http.createServer(fun1)
// server.listen(8080);
