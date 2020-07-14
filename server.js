var express = require('express');
var app = express();
var server=require('http').Server(app);
var Client=require('socket.io')(server).sockets;
var path = require('path');
var ip = require('ip');
var mongo=require('mongodb').MongoClient;
var port=8080;
//connect to Mongo
mongo.connect('mongodb://localhost/chatdb',function(err,db){
if(err){
    throw err;
}
console.log('Mongo Connected');
//connect to socket
client.on('connection',function(socket){
    console.log('A new user is connected')
})

})
app.get('/',function(req,res){
    res.sendfile('index.html')
})
 server.listen(port,function(){
     console.log('The server is listening at http://' + ip.address() + ":" + port);
 })