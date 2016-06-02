var http = require('http'); 
var port = process.env.PORT || 3000; 

http. createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Status Update Checker');
}).listen(port, hostname, function() {
	console.log("Server Running");
});