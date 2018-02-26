var mongoose = require('mongoose'),
	express = require("express"),
	bodyParser = require("body-parser"),
	app = express();

var Models = require("./models/tvshow");


//Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json() );

//Importar models


//Rutas
var router = express.Router();

router.get( '/', function(require, response){
	response.send("Hola Mundo!");
});

app.use(router);


//Iniciar servidor
app.listen(3000, function() {
		console.log("Node server running on http://localhost:3000");
});	



