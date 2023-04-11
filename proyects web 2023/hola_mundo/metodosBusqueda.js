'use strict'

var numero = 444;
var texto = "hola mundo estoy aprendiendo javaScript lo mejor del mundo"
var texto2 = " es muy divertido";

var busqueda = texto.indexOf("estoy");//busca la palabra que le indique y me devuelve la posicion del caracter inicial

var busqueda3 = texto2.substring(1,11);//saca la parte que yo le indique del string
var busqueda2 = texto.match(/mundo/gi);//me busca las coicidencias y me devuelve un array
var busqueda4 = texto.charAt(23);//busca una letra en el indice que yo indique
var busqueda5 = texto.startsWith("hol")//me devuelve true o false si la parte que le indico esta al inicio del texto
var busqueda6 = texto2.endsWith("do")//me devuelve true o false si el texto dado coincide con el final del texto
var busqueda7 = texto.includes("java")//me devuelve true o false si la palabra esta dentro del string
console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);

