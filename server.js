
var http = require('http');
var numeral = require('./module3.js');




http.createServer(function (req, res) {
res.writeHead(200); //HEAD; 200 is a # from a list of # (don't use 500)
  res.write(numeral.getNumber());//
  res.write(numeral.makeNumber()); //body;
  res.end(); // done with response okay to send it

}).listen(3000);
