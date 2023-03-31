'use strict'

/*hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario*/

var n1 = parseInt(prompt("digita el numero inicial",1));
var n2 = parseInt(prompt("digita el numero final",2));

for(let i = n1; i <= n2; i++){
    document.write(i + "<br/>")
};