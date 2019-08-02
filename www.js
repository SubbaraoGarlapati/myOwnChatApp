// load modules
var app = require('./app.js');
var http = require('http');

//set port of app
var port = normalizePort(process.env.port || '3000');
app.set('port',port);

//create server and begin listening
var server = http.createServer(app);
server.listen(port);

//determine port number
function normalizePort(val) {
	var port = parseInt(val,10);

	if (isNaN(port)) {
		//named pipe
		return val;
	}
	if (port >=0) {
		//port number
		return val;
	}
	return false
}