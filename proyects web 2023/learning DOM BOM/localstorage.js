'use strict'

//local storage


//comprobar disponibilidad del localstorage
if(localStorage !== 'undefained'){
    console.log("el localstorage esta activo")
}else{
    console.log("el localstorage no funciona")
};

//guardar datos
localStorage.setItem( "lenguaje de programacion", "Java Script");

//recuperar elemento
document.querySelector("#local").innerHTML = localStorage.getItem("lenguaje de programacion")

console.log(localStorage.getItem("lenguaje de programacion"));


//guardar objetos
var usuario = {
    nombre: "sebastian carrero",
    email: "mugssebastian@gmail.com",
    ciudad: "Bogota"
};

localStorage.setItem("usuario", JSON.stringify(usuario))

//recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#local").append(userjs.ciudad)

//borrar
localStorage.removeItem("usuario")