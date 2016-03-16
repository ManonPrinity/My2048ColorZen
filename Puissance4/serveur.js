var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app.html');
});

var players = {};

io.sockets.on('connection', function(socket){
  console.log('New connection');

  socket.emit('connected', 'hello');

  socket.on('keypressed', function(keycode) {
    console.log(keycode);
    io.sockets.emit('keycode', 'keycode is : ' + keycode);
  });

  socket.on('disconnect', function() {
    console.log('bye');
  });
});

http.listen(3000, function() {
  console.log('Web Server started, listening on *:3000');
});
