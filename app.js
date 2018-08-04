var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/characters/:id?', routes.characters);

app.get('/about/', routes.about);

app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000) 
console.log("This application is running on localhost:3000");