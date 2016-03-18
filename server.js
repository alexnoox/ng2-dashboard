var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('A user connected', socket.id);
  
  socket.on('add widget', function(widget){
    console.log('Received a new widget! ', widget, 'from socket', socket.id);
    io.emit('broadcast widget', widget);
  });
  
  socket.on('disconnect', function(){
    console.log('A user disconnected', socket.id);
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
