'use strict'

//document object model

// function cambiaColor(color){
//     caja.style.background = color
// }
//consiguiendo elementos con un ID

//var caja = document.getElementById("caja");//señala un elemento por el id
    //caja = document.getElementById("caja").innerHTML;//entra al codigo dentro de las etiquetas
// var caja = document.querySelector("#caja")


//     caja.innerHTML = "texto desde javaScript";//cambiando el texto desde java script
//     caja.style.background = "red";
//     caja.style.padding = "20px";
//     caja.style.color = "#fff"
//     caja.className = "hola"

// console.log(caja)

//conseguir elementos por su etiqueta
var divs = document.getElementsByTagName("div")
// var contenido = divs[3]
// contenido.style.background = "red";
// console.log(contenido)
// console.log(divs)
var valor;
for(valor in divs){
    if(typeof divs[valor].textContent === "string"){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(divs[valor].textContent);
    parrafo.appendChild(texto)
    document.querySelector("#misection").appendChild(parrafo)
}
}

//conseguir elementos por su clase

