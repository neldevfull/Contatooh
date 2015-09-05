//config/express.js
var express = require('express');
var load    = require('express-load');

module.exports = function() { 
    var app = express();
    // config environment
    app.set('port', 3000);
    // Middleware
    app.use(express.static('./public')); 
    // Template Engine
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    // Loaded modules and its dependencies 
    load('models', {cwd: 'app'})
    	.then('controllers')
    	.then('routes')
    	.into(app);

    return app;
};
 