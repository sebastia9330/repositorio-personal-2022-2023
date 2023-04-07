'use strict'

var texto = "hello world i am a global variable"

function holamundo(texto){
console.log(texto);
var saludo = "hola" 
}

console.log(saludo)

//una variable creada dentro de una funcion no se puede llamar fuera de la funcion



holamundo(texto)