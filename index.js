var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + "/public"));

server.get('/', function(request, response) {
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/hexagon-grid.html', function(request, response) {
  response.sendFile('public/html/hexagon-grid.html', {root: __dirname});
});

server.listen(port, function(){
  console.log("Now listening on port...", port);
});
