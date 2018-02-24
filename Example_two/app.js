var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json() );
app.use(methodOverride() );

var router = express.Router();

router.get( '/', function(require, response){
	response.send("Hola Mundo!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function(error, response) {
	if(error){
		console.log('ERROR: connecting to Database. ' + error);
	}
	app.listen(3000, function() {
		console.log("Node server runing on http://localhost:3000");
	});
});



