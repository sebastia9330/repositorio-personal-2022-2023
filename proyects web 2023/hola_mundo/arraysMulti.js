'use strict'

//los arrays multidimencionales son arrays dentro de otros arrays

var categorias = ["Accion", "Terror", "Comedia"];
var Peliculas = ["La vida es bella", "El pianista", "godzilla"];

// Peliculas.sort();//organiza el array
Peliculas.reverse();
console.log(Peliculas);

var cine = [categorias, Peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][1]);

// var elemento = ""

// do{
//     elemento = prompt("Introduce tu pelicula: ");
//     Peliculas.push(elemento)//agrega un elemento al final
// }while(elemento != "acabar");

// Peliculas.pop();//elimina el ultimo elemento

var indice = Peliculas.indexOf("La vida es bella");
if(indice > -1){
    Peliculas.splice(indice,1);//elimina un elemento
}

var texto = Peliculas.join();
var cadena = "texto1 text2 texto3"
var array = cadena.split(" ");
console.log(array)

console.log(texto)

var numeros = ["mora","uva","pera","manzana","fresa","naranja","limon","piña","mandarina"];

for(var numero in numeros){
    document.write("<h1>" + numeros[numero] + "</h1>")
}

//busquedas

var busqueda = numeros.find(numero => numero === "manzana");//busca un elemento
var busqueda1 = numeros.findIndex(numero => numero === "manzana");//busca el indice del elemento

var precios = [10,11,12,13,14,15,16,17];
var busqueda2 = precios.some(precio => precio <= 20);//busca con una condicion concreta


console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);