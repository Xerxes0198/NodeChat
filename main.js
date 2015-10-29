//http://arminboss.de/2013/tutorial-how-to-create-a-basic-chat-with-node-js/

var http = require('http');
var fs = require('fs');


//Create http server and set a response for callback function
var app = http.createServer(function(request, response)
{
  fs.readFile("client.html", 'utf-8', function(error, data)
  {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(data);
    response.end();
  });

}).listen(1337);
