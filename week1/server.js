var fs = require('fs');
var http = require('http');
http.createServer((request,response) =>{
	var url = request.url;
	if(request.url == '/'){
		url = '/hello.html';
	}

	response.end(fs.readFileSync(__dirname + url));
	
	console.log('server start!');
}).listen(8000);

