"use strict"

/*utiizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce un numero hasta que introduzcas un numero negativo: ", 0));

    if( isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;

        contador++
    }

}while(numero >= 0);

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: "+ (suma/contador));