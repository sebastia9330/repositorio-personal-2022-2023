'use strict'

/*
Hacer un programa que:
1. Pida 6 numeros por pantalla y los meta en un array
2. tiene que mostrar el array en la pagina y en la consola
3. sacar el array ordenado
4. invertir el array y mostrarlo
5. mostrar cuantos elementos tiene el array
6. hacer una busqueda de un valor introducido por el usuario y que nos diga si esta en el array y que nos diga su indice
*/

function mostrarArray(numeros, texto = "") {
    document.write("<h2>Contenido del array " + texto + "</h2>");
    document.write("<ul>");
    numeros.forEach((numero, index) => {
        document.write("<li>" + numero + "</li>")
    });
    document.write("</ul>")
}


var elementos = []
do{
    var elemento = prompt("intruduce un numero: ");
    elementos.push(elemento)
}while(elementos.length < 6)
    console.log(elementos.length);


// for(var i in elementos){
// document.write("<h1>" + elementos[i] +  "</h1>")
// }
mostrarArray(elementos);



var reverso = elementos.reverse();
//document.write("<h2>el array invertido es: </h2>" + reverso);
mostrarArray(reverso, "reverso");

var ordenado = elementos.sort(function(a,b){return a-b});
//document.write("<h2>el array ordenado es: </h2>" + ordenado);
mostrarArray(ordenado, "ordenado")

var longitud = elementos.length;
document.write("<h2>el array tiene " + longitud +  " elementos</h2>");

var buscar = prompt("introduce el elemento que quieres buscar: ");

var busqueda = elementos.find(busco => busco === buscar);
document.write("<h2>el elemento buscado es: " + busqueda + "</h2>");

var busqueda2 = elementos.findIndex(busco1 => busco1 === buscar);
document.write("<h2>el indice del elemento es: " + busqueda2 + "</h2>");

console.log(elementos);

