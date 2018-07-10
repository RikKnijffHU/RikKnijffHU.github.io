var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
 
app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});
 

 var clients = [];
 
app.ws('/poll', function(ws, req) {
clients.push(ws);

  ws.on('message', function(msg) {
      clients.forEach(function(client){
          console.log(msg)
client.send(msg)
      })
   
  });
  console.log('socket', req.testing);
});
 console.log('test')
app.listen(3001);