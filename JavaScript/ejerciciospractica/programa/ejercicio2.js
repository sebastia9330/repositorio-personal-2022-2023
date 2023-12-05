/*Programa que indica si un numero es primo o no*/

let num = parseFloat(prompt("Ingresa un numero: "))

if(num < 2){
    document.write("El número "+ num +" no es primo")
}else{
    let esPrimo = true;

    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            esPrimo = false;
            break;
        }
    }
    
    if(esPrimo){
        document.write("El número "+ num +" es primo")
    }else{
        document.write("El número "+ num +" no es primo")
    }
}
