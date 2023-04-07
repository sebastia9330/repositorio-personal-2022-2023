'use strict'

//funciones anonimas
//es una funcion que no tiene nombre

// var pelicula = function(nombre){
//     return "la pelicula es: " + nombre;
// }

// fuction callback

function sumame(n1,n2, sumaYmuestra, sumaPorDos){
    var sumar = n1 + n2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar
};

sumame(7,5,(dato) => {
    console.log("La suma es: ", dato);
},
(dato) => {
    console.log("la suma por dos es: ", (dato*2));
});