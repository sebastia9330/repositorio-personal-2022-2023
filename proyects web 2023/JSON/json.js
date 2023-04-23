'use strict'


// json

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'estados unidos'
};


console.log(pelicula);

var peliculas = [
    {titulo: "la vida es bella", year: 2016, pais: "francia"},
    pelicula
]

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year)
    caja_peliculas.append(p)
};

