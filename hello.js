// Just a sample hello world daemon program

var express = require('express');
var app = express();

app.get('/test', function(req,res){
  res.send('Hello Netreca..!');
});

app.listen(3000,function(){
  console.log('Test');
});
