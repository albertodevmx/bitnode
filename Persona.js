"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona() {
        this.MAYORIA_DE_EDAD = 18;
        this.SEXO_DEFAULT = "H";
        this.nombre = "Un tipo";
        this.edad = 0;
        this.NSS = "";
        this.sexo = "H";
        this.peso = 0;
        this.altura = 0;
    }
    Persona.prototype.calcularIMC = function () {
        // Se declaran los valores
        var resultado;
        var altura = this.altura;
        var peso = this.peso;
        var DECIMALES = 2;
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
        return "Esta es toda la información del objeto";
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
