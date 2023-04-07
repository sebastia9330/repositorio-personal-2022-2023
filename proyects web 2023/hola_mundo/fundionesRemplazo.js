var numero = 444;
var texto = "hola mundo estoy aprendiendo javaScript lo mejor del mundo"
var texto2 = " es muy divertido";

var remplazo = texto.replace("javaScript", "Angular")//remplaza una parte del texto por una parte nueva y devuelve todo el texto cambiado
var remplazo2 = texto2.slice(9)//corta el string desde el punto que yo le diga 
var remplazo3 = texto.split(" ");//convierte al texto en arrays
var remplazo4 = texto2.trim();//quita los espacios al inicio y al final
console.log(remplazo);
console.log(remplazo2);
console.log(remplazo3);
console.log(remplazo4);
