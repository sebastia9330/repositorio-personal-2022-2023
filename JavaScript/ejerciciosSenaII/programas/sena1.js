let n1 = parseInt(prompt("Digita el primer numero: "));
let n2 = parseInt(prompt("Digita el segundo numero: "));
let n3 = parseInt(prompt("Digita el tercer numero: "));

if(n1 > 0){
    let produ = n2 * n3;
    document.write("<h1>El producto de la multiplicacion es: " + produ + "</h1>");
}else{
    let sum = n2 + n3;
    document.write("<h1>El resultado de la suma es: " + sum + "</h1>")
}