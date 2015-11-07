//http://arminboss.de/2013/tutorial-how-to-create-a-basic-chat-with-node-js/

var http = require('http');
var fs = require('fs');

var debug = true;

//Create http server and set a response for callback function
var app = http.createServer(function(request, response)
{

  console.log("Request received.");

  fs.readFile("client.html", 'utf-8', function(error, data)
  {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(data);
    response.end();

    //Log data
    if(debug == true)
    {
      console.log(data);
    }
  });

}).listen(1337);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket)
{
  socket.on('message_to_server', function(data)
  {
    io.sockets.emit("message_to_client", {message : data["message"]});
  });
});

bob = function()
{
  console.log("Bob pressed");
}


bob();
