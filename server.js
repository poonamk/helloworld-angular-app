var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log("Hello World");
  //res.send("Hello World");
  res.sendFile("./angular-frontend/HelloWorld.html",{"root": __dirname});
});

console.log("The server running at port : 5000");

app.listen(5000);