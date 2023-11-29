let fila = 4;
let colum = 3;
let matriz = []

for(let F = 0; F < fila; F++){
    matriz[F] = [];
    for(let C = 0;C < colum; C++){
        let dato = prompt("ingresa el dato para la fia " + (F + 1)  +" y la columna "+ (C + 1));
        matriz[F][C] = parseInt(dato)
    }
}

document.write("La matriz ingresada es: <br>");
for (let F = 0; F < fila; F++) {
    for (let C = 0; C < colum; C++) {
        document.write(matriz[F][C] + " ");
    }
    document.write("<br>");
}
document.write("<hr>");


for(let F = 0; F < fila; F++){
    var sumaf = 0;
    for(let C = 0;C < colum; C++){
        sumaf += matriz[F][C]
    }
    document.write("Suma de la fila " + (F + 1) + ": " + sumaf + "<br>");
}
document.write("<hr>");

for(let C = 0; C < colum; C++){
    var sumac = 0
    for(let F = 0; F < fila; F++){
        sumac += matriz[F][C]
    }
    document.write("Suma de la columna " + (C + 1) + ": " + sumac + "<br>");
}
document.write("<hr>");

    



