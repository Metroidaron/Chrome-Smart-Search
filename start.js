var express = require('express');
var app = express();

//Prepare Server
app.use('/', express.static(__dirname + '/public')); //Redirect Root folder
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect CSS bootstrap
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome')) // Redirects to Font-Awesome

app.listen(8080);
