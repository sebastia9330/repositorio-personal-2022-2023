/*una calculadora que reciba dos numeros, que nos muestre si ingresamos un numero mal y que en una alerta nos muestre los resultados de las operaciones*/

var n1 = parseInt(prompt("digita el numero uno",1));
var n2 = parseInt(prompt("digita el numero dos",2));

while(n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("digita el numero uno",1));
    n2 = parseInt(prompt("digita el numero dos",2));
}

var resultado = "la suma es: " + (n1 + n2) + "<br/>" + 
                "la resta es " + (n1 - n2) + "<br/>" + 
                "la multiplicacion es " + (n1 * n2) + "<br/>" + 
                "la division es " + (n1 / n2) + "<br/>"

var resultadoA = "la suma es: " + (n1 + n2) + "\n" + 
                "la resta es " + (n1 - n2) + "\n" + 
                "la multiplicacion es " + (n1 * n2) + "\n" + 
                "la division es " + (n1 / n2) + "\n"

alert(resultadoA)
document.write(resultado)
