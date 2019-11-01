"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones
var express = require("express");
var bodyParser = require("body-parser");
var session = require("cookie-session");
var persona_1 = require("./persona");
// Declaración de variables
var app = express();
app.use(session({ secret: 'nodejs' }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index.ejs', { render: true });
});
app.post('/procesar', function (req, res) {
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    var peso = req.body.peso;
    var altura = req.body.altura;
    var sexo = req.body.sexo;
    var unaPersona = new persona_1.Persona();
    unaPersona.setEdad(edad);
    unaPersona.setPeso(peso);
    unaPersona.setAltura(altura);
    unaPersona.setSexo(sexo);
    res.redirect('/');
});
app.listen(8080, function () {
    console.log("Me estoy ejecutando desde app");
});
// module.exports = app;
