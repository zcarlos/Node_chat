var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response){
	response.send('<h1>Olá Mundo</h1>');
});

http.listen(3000, function(){
	console.log('A escuta no porto: 3000');
});