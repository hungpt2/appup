var express = require('express'),
  multer = require('multer'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

// Use defaults for app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server static files
app.use(express.static(__dirname + '/public'));

// app.use(function(req, res) {
//     console.log(req.originalUrl);
//     res.status(404).send(req.originalUrl + ' not found')
// });
cors = require('./cors');
app.use(cors());

// Example Routes for Components testing
var routes = require('./api/routes/templateRoutes'); //importing route
routes(app); //register the route

// APPUP API Mocks for Appup Appication building
var appupApiMocks = require('./appup_apimocks');
appupApiMocks(app, '/api');

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);