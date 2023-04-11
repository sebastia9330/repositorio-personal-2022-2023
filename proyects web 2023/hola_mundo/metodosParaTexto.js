'use strict'

//Transformacion de textos

var numero = 444;
var texto = "hola mundo estoy aprendiendo javaScript"
var texto2 = " es muy divertido"

var dato = numero.toString();//cambia numero a texto
    dato = texto.toLocaleLowerCase(); //cambiar texto a minusculas
    dato = texto2.toLocaleUpperCase(); //cambiar texto a mayusculas


console.log(dato);

//calcular la longitud del string

var nombre = "";

console.log(nombre.length); //length sirve para contar

//concatenar o unir textos

var textoTotal = texto + texto2;
var textoTotal2 = texto.concat(" "+ texto2);//concant sirve para unir textos


console.log(textoTotal2)
console.log(textoTotal);
