let num = parseInt(prompt("Digite un numero", 0));

function factorial(num){
let fac = 1

//document.write(num)

for(let i = 1; i < num + 1; i++){
   fac *= i
}
    return fac
}

document.write("<h2>El factorial de " + num + " es: " + factorial(num) + "</h2>");