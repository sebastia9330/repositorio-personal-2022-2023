let n1 = parseInt(prompt("Digita el primer numero: "));
let n2 = parseInt(prompt("Digita el segundo numero: "));
let n3 = parseInt(prompt("Digita el tercer numero: "));

sum1 = n2 + n3;
sum2 = n1 + n3;
sum3 = n2 + n1;

if(n1 === sum1){
    document.write("<h1>El numero " + n1 + " es igual a la suma de " + n2 + " mas " + n3 +"</h1>");
}else if(n2 === sum2){
    document.write("<h1>El numero " + n2 + " es igual a la suma de " + n1 + " mas " + n3 +"</h1>");
}else if(n3 === sum3){
    document.write("<h1>El numero " + n3 + " es igual a la suma de " + n2 + " mas " + n1 +"</h1>");
}else{
    document.write("<h1>Ninguno de los numero  coincide en la suma de los otros dos</h1>")
}


