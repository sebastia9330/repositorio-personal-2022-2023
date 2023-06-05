'use strict'

var verificar  = document.querySelector("#par");

verificar.addEventListener('submit', function(){
    var numero = document.querySelector('#num').value
    if(numero.length >= 1){
        localStorage.setItem(numero, numero)
    }
    
    var entero = parseInt(numero)
    console.log(typeof(entero))


});


var ul = document.querySelector("#lista");

for(var i in localStorage){
    if(localStorage[i] % 2 === 0){
        var li = document.createElement("li");
        li.append(localStorage[i]+ " es par");
        ul.append(li)
    }
};