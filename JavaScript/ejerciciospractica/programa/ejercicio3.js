/*Programa para sumar las centenas, decenas y las unidades*/

let num = parseInt(prompt("Ingresa un numero: "))

let U = num % 10


let D = Math.floor((num % 100) / 10);//math floor redonde el numero hacia abajo


let C = Math.floor(num / 100);

let suma = C + D + U;

document.write("El resultado de la suma de los digitos del numero " + num + " es " + suma)


