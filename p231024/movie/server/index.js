// mongoose
const mongoose = require("mongoose");
const { mongoURI } = require("./config/dev");
//express
var express = require('express');
var app = express();

const connect = mongoose
  .connect(mongoURI)
  .then(() => console.log("[MongoDB] connected..."))
  .catch(() => console.log("errrrror"));

const port = 3000;
app.listen(port, ()=>{
  console.log('listening on '+port);
})
  app.get('/', function(req, res) {
    res.send('.');
  });
  