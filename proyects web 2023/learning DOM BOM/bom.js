'use strict'

// BOM / Browser object Model

function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location.href)
}

function redirection(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url);
}
getBom();