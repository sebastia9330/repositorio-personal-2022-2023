let ganados = parseInt(prompt("Ingrese la cantidad de partidos ganados"));
let empatados = parseInt(prompt("Ingrese la cantidad de partidos empatados"));
let perdidos = parseInt(prompt("Ingrese la cantidad de partidos perdidos"))

document.write("Partidos Ganados: "+ ganados + "<br/>");
document.write("Partidos Empatados: "+ empatados + "<br/>");
document.write("Partidos Perdidos: "+ perdidos + "<br/>");

totalPuntos = (ganados * 3) + (empatados * 1) + (perdidos * 0)

document.write("El total de punto es: " + totalPuntos)
