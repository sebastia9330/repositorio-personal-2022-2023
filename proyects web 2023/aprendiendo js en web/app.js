var nombre = "Sebastian Carrero";
var edad = 25;

/*
var titulo = document.getElementById("titulo");
titulo.innerHTML = `<h1>Soy una caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h2>tengo: ${edad} años</h2>`;

if(edad >= 18){
    titulo.innerHTML += `<h1>
    Eres mayor de edad</h1>`
}else{
    titulo.innerHTML += `<h1>
    Eres menor de edad</h1>`
}

for(var i = 2000; i <= 2023; i++){
    titulo.innerHTML += "<h2>Estamos en el año: "+i;
}
*/

function muestraMiNombre(nombre, edad) {
    var misDatos = `<h1>Soy una caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>tengo: ${edad} años</h2>`;

    return misDatos
}

function imprimir(){
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = muestraMiNombre("Dilza Robles", 30);
}


imprimir();


var nombres = ["Sebastian", "Dilza", "Samuel"];

document.write("<h3>listado de nombres</h3>");
for(let i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br/>")
}
