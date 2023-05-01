var http = require('http');

const port = 3000;
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //write a response to the client
    res.end('<h1>Hello Node!!!!</h1>\n'); //end the response
}).listen(port); //the server object listens on port 3000

console.log(`Server running at http://127.0.0.1:3001/${port}`);