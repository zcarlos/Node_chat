var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Encaminhamento para ficheiros
app.use(express.static(__dirname + '/public'));
// Carrega ficheiro index relativo ao caminho defenido
//app.get('/', function(request, response){
//	response.sendFile(__dirname + '/index.html');
//});

io.on('connection', function(socket){
	console.log('A user connected...');

	socket.on('chat message', function(msg){
		//console.log(msg);
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function(){
		console.log('A user disconnected...');
	});
});

http.listen(8080, function(){
	console.log('Listening on port: 8080');
});