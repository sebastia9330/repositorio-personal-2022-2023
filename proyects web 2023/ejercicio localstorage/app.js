'use strict'

var formulario = document.querySelector("#formp");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector("#addpelicula").value
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
    
});

var ul = document.querySelector("#list");

for (var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li)
    }
};