var http = require('http');
var app  = require('./config/express')();

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server run in the port ' + app.get('port'));	
}); 
 