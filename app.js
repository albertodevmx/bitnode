"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones
var express = require("express");
var bodyParser = require("body-parser");
var session = require("cookie-session");
var persona_1 = require("./persona");
var data = {};
// Declaración de variables
var app = express();
app.use(session({ secret: 'nodejs' }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index.ejs', { error: false, data: data });
});
app.post('/procesar', function (req, res) {
    crearObjeto1(req.body);
    crearObjeto2(req.body);
    crearObjeto3(req.body);
    console.log(data);
    res.render('index.ejs', { error: false, data: data });
});
var crearObjeto1 = function (body) {
    var objeto1 = new persona_1.Persona(body.nombre, body.edad, body.sexo, body.peso, body.altura);
    data.objeto1 = {
        titulo: "Objeto 1",
        pesoIdeal: objeto1.calcularIMC(),
        esMayorDeEdad: objeto1.esMayorDeEdad(),
        informacion: objeto1.toString()
    };
};
var crearObjeto2 = function (body) {
    var objeto2 = new persona_1.Persona(body.nombre, body.edad, body.sexo);
    data.objeto2 = {
        pesoIdeal: objeto2.calcularIMC(),
        esMayorDeEdad: objeto2.esMayorDeEdad(),
        informacion: objeto2.toString()
    };
};
var crearObjeto3 = function (body) {
    var objeto3 = new persona_1.Persona();
    // unaPersona.setEdad(edad)
    // unaPersona.setPeso(peso)
    // unaPersona.setAltura(altura)
    // unaPersona.setSexo(sexo)
    data.objeto3 = {
        pesoIdeal: objeto3.calcularIMC(),
        esMayorDeEdad: objeto3.esMayorDeEdad(),
        informacion: objeto3.toString()
    };
};
app.listen(8080, function () {
    console.log("Me estoy ejecutando desde app");
});
// module.exports = app;
