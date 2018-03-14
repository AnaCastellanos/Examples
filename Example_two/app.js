var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(require, response) {
	response.send("Hola Mundo");
});

app.use(router);

app.listen(3000, function(){
	console.log("Node server runing on http://localhost:3000");
});





// var mongoose = require('mongoose'),
// 	express = require("express"),
// 	// bodyParser = require("body-parser"),
// 	app = express();

// var Models = require("./models/tvshow");


// //Middlewares
// // app.use(bodyParser.urlencoded({ extended: false}));
// // app.use(bodyParser.json() );

// //Rutas
// // var router = express.Router();

// // router.get( '/', function(require, response){
// // 	response.send("Hola Mundo!");
// // });

// // app.use(router);


// //Iniciar servidor
// app.listen(3000, function() {
// 		console.log("Node server running on http://localhost:3000");
// });	



