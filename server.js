var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log("server running at port : 4000");
  res.send("Hello World");
});

app.listen(4000);