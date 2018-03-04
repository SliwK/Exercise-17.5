var express = require('express');
var app = express();

app.use("/store", function(req, res, next){
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store.');
/*    res.on('finish', function() {
      console.log('Wysłałem odpowiedź!') ;
    });
    */  //to bardziej wynika z NODA - https://nodejs.org/api/http.html#http_event_finish
    next();
});

app.get('/', function (req, res) {
  res.send("hello world!");
});

app.get("/store", function (req, res,next) {
  res.send("To jest sklep");
  next(); //next wywołuje kolejną funkcję w tym łańcuchu wywołań - tak to powinno być zaimplementowane
  res.on('finish', function() {
    console.log('Wysłałem odpowiedź!') ;
  });
});

var server = app.listen(3000, 'localhost', function() {
    console.log('Przykładowa aplikacja nasłuchuje');
});
