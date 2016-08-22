var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log("Hello World");
  res.send("Hello World");
});

console.log("server running at port : 4000");

app.listen(4000);