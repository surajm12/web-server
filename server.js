var express = require('express');
var app = express();
var port = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/aboutus', middleware.requireAuthentication, function (req, res) {
     res.send('About Us!!!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log('Server started running at port ' + port);
});
