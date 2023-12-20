let palabra = prompt("ingresa una palabra: ");

let array = palabra.split("")
let vacio = []

document.write("La palabra ingesada es: " + palabra + "<br>")



for(let i = array.length - 1; i >= 0; i--){
    vacio.push(array[i])
}
vacio = vacio.join("")
document.write("La palabra invertida es: " + vacio);