let palabra = prompt("Ingresa la palabra que desees: ")
let contador = 0;

document.write("La palabra ingresada es: " + palabra + "<br>")

for(let i = 0; i < palabra.length; i++){
    if(palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u"){
        contador = contador + 1;
    }
}

document.write("La cantidad de vocales es: " + contador)