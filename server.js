var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected', socket.id);
  
  socket.on('add widget', function(widget){
    console.log('add widget: ' + widget);
    io.emit('broadcast widget', widget);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
