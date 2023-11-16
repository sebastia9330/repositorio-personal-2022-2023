let respuestaCorrecta = parseInt(prompt("Ingrese la cantidad de respuestas correctas obtenidas"));
let respuestaIncorrecta = parseInt(prompt("Ingrese la cantidad de respuestas incorrectas obtenidas"));
let respuestaBlanco = parseInt(prompt("Ingrese la cantidad de respuestas en blanco obtenidas"))


document.write("La cantidad de respuestas correctas son: " + respuestaCorrecta + " los puntos obtenidos son "+ respuestaCorrecta*4 + "<br/>");
document.write("La cantidad de respuestas incorrectas son: " + respuestaIncorrecta + " los puntos obtenidos son "+ respuestaIncorrecta*1 + "<br/>");
document.write("La cantidad de respuestas en blanco son: " + respuestaBlanco + " los puntos obtenidos son "+ respuestaBlanco*0 + "<br/>");

totalPunto = (respuestaBlanco * 0) + (respuestaCorrecta * 4) + (respuestaIncorrecta * 1);

document.write("El total de puntos es: " + totalPunto)