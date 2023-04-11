'use strict'

//Plantillas de Texto

var nombre = prompt("nombre: ");
var apellido = prompt("apellidos: ");

//var texto = "Mi nombre es: " + nombre + "Mi apellido es: " + apellidos;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`

document.write(texto);