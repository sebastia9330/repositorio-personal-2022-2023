'use strict'

//son colecciones de tipos de datos dentro de una variable
//siempre van entre []

var frutas = ["pera", "uva", "fresa", 1234, true, ["manzana", "naranja"]];
//indices       0       1       2       3     4             5             
//los indices siempre inician en 0

var lenguajes = new Array("python", "jS", "php", "go", "c#", "java");

console.log(frutas[2]);//imprimir un indice especifico
console.log(lenguajes);//imprimir todo el array
console.log(frutas.length)//imprimir la cantidad de elementos dentro de array

// var elemento = parseInt(prompt("que elemento del array quieres: ", 0));

// if(elemento >= frutas.length){
//     alert("intruduce el numero menor que " + frutas.length)
// }else{
//     alert(frutas[elemento]);
// }

document.write("<h1>Lenguajes de programacion del 2023</h1>");
// for(var i = 0; i < lenguajes.length; i++){
//     document.write("<h1>" + lenguajes[i] + "</h1>")
// }

lenguajes.forEach((elemento, indice)=>{
    document.write("<h1>" + indice + " " + elemento + "</h1>")
});

