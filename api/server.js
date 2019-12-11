'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = [{ 
      "id": 1,
      "title" : "AWS Master Class #1",
      "text" : "EC2, SSH and S3 right to the beefs",
      "teachers" : "German Bobr and Cristian Ramos"
   }]
   res.end(JSON.stringify(response));
})

var server = app.listen(4004, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
