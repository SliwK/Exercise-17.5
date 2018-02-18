var express = require('express');
var app = express();

app.use("/store", function(req, res, next){
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store.');
    next();
});

app.get('/', function (req, res) {
  res.send("hello world!");
});

app.get("/store", function (req, res,next) {
  res.send("To jest sklep");
  res.on('finish', function() {
    console.log('Wysłałem odpowiedź!') ;
  });
  next();
});

var server = app.listen(3000, 'localhost', function() {
    console.log('Przykładowa aplikacja nasłuchuje');
});
