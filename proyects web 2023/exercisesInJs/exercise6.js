/*Hacer un programa que nos diga si un numero es par o impar*/

var numero = parseInt(prompt("ingresa el numero: ", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("ingresa el numero: ", 0));
}

if(numero % 2 === 0){
    alert("el numero " + numero + " es par")
    document.write("el numero " + numero + " es par")
}else{
    document.write("el numero " + numero + " es impar")
}