"use strict"

/*mostrar todos los numeros impares que hay entre dos numeros ingresados por el usuario */

var n1 = parseInt(prompt("ingresa el numero inicial: ", 0));
var n2 = parseInt(prompt("ingresa el numero final: ", 0));

for (let i = n1; i < n2+1; i++){
    if(i % 2 != 0){
    document.write(i + "<br>")
    }
}