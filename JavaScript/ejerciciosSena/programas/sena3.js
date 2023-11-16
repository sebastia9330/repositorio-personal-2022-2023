let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
let precio = parseInt(prompt("Ingrese el precio por hora trabajada"));

total = horas * precio;

document.write("El total de horas trabajadas es de: " + horas + "<br/>");
document.write("El valor de cada hora trabajadas es de: " + precio + "<br/>");
document.write("el pago total es de: " + total)