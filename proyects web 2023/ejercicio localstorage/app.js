'use strict'

// var formulario = document.querySelector("#formp");

// formulario.addEventListener('submit', function(){
//     var titulo = document.querySelector("#addpelicula").value
//     if(titulo.length >= 1){
//         localStorage.setItem(titulo, titulo);
//     }
    
// });

// var ul = document.querySelector("#list");

// for (var i in localStorage){
//     console.log(localStorage[i]);
//     if(typeof localStorage[i] == 'string'){
//         var li = document.createElement("li");
//         li.append(localStorage[i]);
//         ul.append(li)
//     }
// };

// var formularioB = document.querySelector("#formpb");

// formularioB.addEventListener('submit', function(){
//     var titulo = document.querySelector("#borrarpelicula").value
//     if(titulo.length >= 1){
//         localStorage.removeItem(titulo);
//     }
    
// });

var capn = document.querySelector("#cap");

capn.addEventListener('submit', function(){
    var numero = document.querySelector('#num').value
    if(numero.length >= 1){
        localStorage.setItem(numero, numero)
    }

    var entero = parseInt(numero);

if(entero % 2 === 0){
    document.write("<h1>el numero " + entero + " es par</h1>")
}else{
    document.write("<h1>el numero " + entero + " es impar</h1>")
}
});




var ul = document.querySelector("#lista");

for (var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li)
    }
};