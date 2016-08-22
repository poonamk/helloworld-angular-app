var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log("in root /");
  res.send("Hello World");
});

app.listen(4000);