var http = require('http');
const port  = 3000;
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<h1>Hello World\n</h1>');
}).listen(port);
console.log('Server is Running on Port Localhost http://localhost:${port}/');
