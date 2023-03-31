'use strict'

//programa que pida dos numero y nos diga cual es el menor el mayor y si son iguales

var n1 = parseInt(prompt("digita el numero uno",1));
var n2 = parseInt(prompt("digita el numero dos",2));

while(n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("digita el numero uno",1));
    n2 = parseInt(prompt("digita el numero dos",2));
}

if(n1 > n2){
    document.write("numero " + n1 + " es mayor que " + n2);
}else if(n1 < n2){
    document.write("numero " + n2 + " es mayor que " + n1);
}else if(n1 === n2){
    document.write("los numeros " + n1 + " y " + n2 + " son iguales")
}