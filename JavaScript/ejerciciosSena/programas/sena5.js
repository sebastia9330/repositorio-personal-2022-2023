let num1 = parseInt(prompt(`introduzca el primer número`));
let num2 = parseInt(prompt(`intrioduzca el segundo número`));
let num3 = parseInt(prompt(`introduzca el tercer número`));

document.write("los números introducidos son: " + num1 + ", " + num2+ ", " + num3 + "<br/>");

if(num1>=num2 && num1>=num3 && num2>=num3){
    document.write("El orden es: "+ num1 +  ", " + num2 + ", " + num3);
}else if(num1>=num2 && num1>=num3 && num2<=num3){
    document.write("El orden es: "+ num1 +  ", " + num3 + ", " + num2);

}else if(num2>=num1 && num2>=num3 && num1>=num3){
    document.write("El orden es: "+ num2 +  ", " + num1 + ", " + num3);
}else if(num2>=num1 && num2>=num3 && num1<=num3){
    document.write("El orden es: "+ num2 +  ", " + num3 + ", " + num1);

}else if(num3>=num1 && num3>=num2 && num1>=num2){
    document.write("El orden es: "+ num3 +  ", " + num1 + ", " + num2);
}else if(num3>=num1 && num3>=num2 && num1<=num2){
    document.write("El orden es: "+ num3 +  ", " + num2 + ", " + num1);
}