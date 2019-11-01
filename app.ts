// Importaciones
import express = require('express');
import bodyParser = require('body-parser');
import session = require('cookie-session');
import { Persona } from './persona';
var data = {}


// Declaración de variables
const app:express.Application = express();

app.use( session( { secret:'nodejs' } ) )
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	res.render('index.ejs', data)
});

app.post('/procesar', function(req, res){
	let nombre = req.body.nombre;
	let edad = req.body.edad;
	let peso = req.body.peso
	let altura = req.body.altura
	let sexo = req.body.sexo
	
	
	let unaPersona = new Persona()	
	unaPersona.setEdad(edad)
	unaPersona.setPeso(peso)
	unaPersona.setAltura(altura)
	unaPersona.setSexo(sexo)

	res.redirect('/');
});
 
app.listen(8080, () => {
    console.log("Me estoy ejecutando desde app");
});

// module.exports = app;