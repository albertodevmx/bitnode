"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, peso, altura) {
        this.MAYORIA_DE_EDAD = 18;
        this.SEXO_DEFAULT = "H";
        this.nombre = nombre ? nombre : "";
        this.edad = edad ? edad : 0;
        this.NSS = this.generarNSS();
        this.sexo = this.SEXO_DEFAULT;
        this.peso = peso ? peso : 0;
        this.altura = altura ? altura : 0;
    }
    Persona.prototype.calcularIMC = function () {
        // Se declaran los valores
        var resultado;
        var altura = this.altura;
        var peso = this.peso;
        // Se calcula el imc
        var imc = peso / Math.pow(altura / 100, 2);
        // Se retorna el imc con 2 decimales
        switch (true) {
            case (imc < 20): {
                resultado = -1;
                break;
            }
            case (imc >= 25): {
                resultado = 1;
                break;
            }
            default: {
                resultado = 0;
                break;
            }
        }
        return resultado;
    };
    Persona.prototype.esMayorDeEdad = function () {
        return this.edad > this.MAYORIA_DE_EDAD ? true : false;
    };
    Persona.prototype.comprobarSexo = function () {
        return this.sexo == this.SEXO_DEFAULT ? true : false;
    };
    Persona.prototype.toString = function () {
        var cadena = "\n            <b>Nombre</b>: " + this.nombre + " <br>\n            <b>Edad</b>: " + this.edad + " <br>\n            <b>Sexo</b>: " + this.sexo + " <br>\n            <b>Peso</b>: " + this.peso + " <br>\n            <b>Altura</b>: " + this.altura + " <br>\n            <b>NSS</b>: " + this.NSS + "\n        ";
        return cadena;
    };
    Persona.prototype.generarNSS = function () {
        var nss = '';
        var caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 8; i > 0; --i) {
            nss += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        return nss;
    };
    // ===============  Seters ===============
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    Persona.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    return Persona;
}());
exports.Persona = Persona;
