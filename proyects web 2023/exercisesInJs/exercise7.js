/*mostrar la tabla de multiplicar de un numero introducido por pantalla*/

var numero = parseInt(prompt("ingresa el numero del que quiere obtener la tabla de multiplicar: ", 0));



document.write("la tabla del " + numero + " es:" + "<br/>")
for(var i = 0; i <= 10; i++){
    
    
    document.write(numero + " x " + i + " = " + (i * numero) + "<br/>")
}

//todas las tablas

for(var j = 1; j <= 10; j++){
    document.write("<h1>tabla del " + j + "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(`${i} x ${j} = ${i * j}<br/>`)
    }
}